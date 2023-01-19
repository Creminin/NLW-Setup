import dayjs from 'dayjs';
import { FastifyInstance } from 'fastify';
import  { z } from 'zod'
import { prisma } from './lib/prisma'

export async function  appRoutes(app: FastifyInstance) {
  app.post('/habits', async (request) => {
    const createHabitsBody = z.object({
      title: z.string(),
      weekDays: z.array(
        z.number().min(0).max(6)
        ),
    })

    const { title, weekDays } = createHabitsBody.parse(request.body)
    const today = dayjs().startOf('day').toDate()

    await prisma.habit.create({
      data: {
        title,
        created_at: today,
        weekDays: {
          create: weekDays.map((weekDays) => {
            return{
              week_day: weekDays,
            }
          })
        }
      }
    })
  })




  app.get('/day', async (request) => {
    const getDayParams = z.object({
      date: z.coerce.date()
    })

    const { date } = getDayParams.parse(request.query)

    const parsedDate = dayjs(date).startOf('day')
    const weekDay = parsedDate.get('day')

    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date,
        },
        weekDays: {
          some: {
            week_day: weekDay
          }
        }
      }
    })

    const day = await prisma.day.findFirst({
      where: {
        date: parsedDate.toDate(),
      },
      include: {
        dayHabits: true,
      }
    })

    const completeHabits = day?.dayHabits.map((dayHabits) => {
      return dayHabits.habit_id
    })

    return {
      possibleHabits,
      completeHabits
    }
  })
}
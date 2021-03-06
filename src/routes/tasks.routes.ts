import { Router } from 'express'
import {getTasks, createTask,getTask, deleteTask,updateTask,countTask} from '../controllers/tasks.controller'

const router = Router()

/**
 * @swagger
 * components:
 *  schemas: 
 *    Task: 
 *      type: object
 *      properties:
 *         id: 
 *            type: string
 *            description: id autogenerated
 *         name:
 *             type: string
 *             description: task name
 *         description: 
 *             type: string
 *             description: task description
 *      required:
 *        - name
 *        - description
 *      example:
 *        id: WfXYoXkFnuGKCL3S3hjdo
 *        name: task name
 *        description: description task
 *    TaskNotFound:
 *      type: object
 *      properties: 
 *          msg:
 *            type: string
 *            description: a message for not found tasks
 *      example: 
 *          msg: task was not found
 *  parameters:
 *     taskId:
 *       in: path
 *       name: id
 *       required: true
 *       schema: 
 *          type: string  
 *       description: the task id 
 */

/**
 * @swagger:
 * tags:
 *  name: Tasks
 *  description: Tasks endpoints
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Return a tasks list
 *    tags: [Tasks]
 *    responses: 
 *      200:
 *        description: the list of tasks 
 *        content:
 *         application/json:
 *           schema: 
 *              type: array
 *              items: 
 *                $ref: '#/components/schemas/Task'
 */

router.get('/tasks', getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Get total task count
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: the total number of task
 *        content:
 *          text/plain:
 *            schema: 
 *              type: integer
 *              example: 15
 */

router.get('/tasks/count', countTask)

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: create a new task
 *    tags: [Tasks]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: the task succefully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      500:
 *         description: some server error 
 */

router.post('/tasks', createTask)

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *     summary: get a task by id
 *     tags: [Tasks]
 *     parameters:
 *       - $ref: '#/components/parameters/taskId'
 *     responses:
 *        200:
 *          description: the task was found 
 *          content: 
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Task'
 *        404:
 *          description: the task was not found
 *          content: 
 *              application/json:
 *               schema:
 *                  $ref: '#/components/schemas/TaskNotFound'
 */

router.get('/tasks/:id', getTask)

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *     summary: delete a task by id
 *     tags: [Tasks]
 *     parameters:
 *       - $ref: '#/components/parameters/taskId'
 *     responses:
 *        200:
 *          description: the task was deleted 
 *          content: 
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Task'
 *        404:
 *          description: the task was not found
 *          content: 
 *              application/json:
 *               schema:
 *                  $ref: '#/components/schemas/TaskNotFound'
 */

router.delete('/tasks/:id', deleteTask)

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *     summary: update a task by id
 *     tags: [Tasks]
 *     parameters:
 *       - $ref: '#/components/parameters/taskId'
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *     responses:
 *        200:
 *          description: the updated task  
 *          content: 
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Task'
 *        404:
 *          description: the task was not found
 *          content: 
 *              application/json:
 *               schema:
 *                  $ref: '#/components/schemas/TaskNotFound'
 */

router.put('/tasks/:id', updateTask)

export default router
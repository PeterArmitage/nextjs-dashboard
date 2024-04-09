'use server';
import  { z } from 'zod'
import { LoginSchema } from '../schemas';
export async function login(values: z.infer<typeof LoginSchema>){
    const validateFields = LoginSchema.safeParse(values);

    if(!validateFields.success){
        return {error: 'Invalid Fields!'}
    }
    return {success: 'Email sent!'}
}
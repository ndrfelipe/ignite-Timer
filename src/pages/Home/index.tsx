import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { HomeContainer, CountDownContainer, FormContainer, Separator, StartCountdownButton, TaskInput, MinuteAmountInput } from "./styles";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa.'),
    minutesAmount: zod.number().min(5, 'O clico precisa ser de no mínimo 5 minutos').max(60, 'O clico precisa ser de no máximo 60 minutos')
})


type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home(){

    const { register, handleSubmit, watch, reset} = useForm<newCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })

    function handleCreateNewCycle(data: newCycleFormData){
        console.log(data);
        reset();
    }


    const task = watch('task')
    const isSubmitDisabled = !task;

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em </label>

                    <TaskInput 
                        list="task-suggestions" 
                        placeholder="Dê um nome para o seu projeto" 
                        type="text" 
                        id="task" 
                        {...register('task')}
                    />

                    <datalist id="task-suggestions">
                        <option value="DRF"></option>
                        <option value="PIF"></option>
                        <option value="React"></option>
                        <option value="Linkedin"></option>
                    </datalist>
                    <label htmlFor="minutesAmount">durante</label>
                    <MinuteAmountInput 
                        placeholder="00" 
                        type="number"  
                        id="minutesAmount"
                        step={5}
                        min={5}
                        max={60}
                        {...register('minutesAmount', {valueAsNumber: true})}
                     />

                    <span>minutos.</span>
                </FormContainer>
                
                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                    <Play />
                    Começar
                </StartCountdownButton>

            </form>
        </HomeContainer>
    )
}
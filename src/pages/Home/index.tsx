import { Play } from "phosphor-react";
import { HomeContainer, CountDownContainer, FormContainer, Separator, StartCountdownButton, TaskInput, MinuteAmountInput } from "./styles";


export function Home(){
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em </label>
                    <TaskInput list="task-suggestions" placeholder="Dê um nome para o seu projeto" type="text" id="task" />
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

                <StartCountdownButton type="submit">
                    <Play />
                    Começar
                </StartCountdownButton>

            </form>
        </HomeContainer>
    )
}
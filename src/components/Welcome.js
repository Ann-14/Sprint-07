import { WelcomeBackground, WelcomeCard,WelcomeText } from "../styles/PanelStyled"

export const Welcome = ({handleStart}) => {
    const data = false
    return (
      <>
     <WelcomeBackground>
      <WelcomeCard>
          <WelcomeText>This is an An app created with React JS that creates budgets for clients</WelcomeText>
      <button onClick={() => handleStart(data)}>Start!</button>
      </WelcomeCard>
      </WelcomeBackground>
      </>
    )
  }

import {
  PanelStyled, PanelWrapper, ControlsStyled, ButtonControls,
  LabelStyled
} from '../styles/StyledComponents'


export const WebConfiguration = ({ setPages, setLanguages, pages, languages }) => {


  return (
    <>
      <PanelStyled>
        <PanelWrapper>
          <ControlsStyled>
            <LabelStyled htmlFor="pages">Número de páginas:</LabelStyled>
            <ButtonControls onClick={() => setPages(pages + 1)}> + </ButtonControls>
            <div>{pages}</div>
            <ButtonControls onClick={() => setPages(pages - 1)}> - </ButtonControls>
          </ControlsStyled>

          <ControlsStyled>
            <LabelStyled htmlFor="languages">Número de idiomas:</LabelStyled>
            <ButtonControls onClick={() => setLanguages(languages + 1)}> + </ButtonControls>
            <div>{languages}</div>
            <ButtonControls onClick={() => setLanguages(languages - 1)}> - </ButtonControls>
          </ControlsStyled>
        </PanelWrapper>
      </PanelStyled>

    </>
  )
}

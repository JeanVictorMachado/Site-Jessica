import * as S from './styles'

export const VslComponent = () => (
  <S.Container>
    <S.VSLTitle>
      Veja como começar agora na profissão que mais deixa pessoas milhonarias no mundo
    </S.VSLTitle>

    <S.AspectRatioBox>
      <video controls style={{ height: '80%', borderRadius: '16px' }}>
        <source src='https://player.vimeo.com/video/675866377?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;h=7d6f99eb19#t=' />
      </video>
    </S.AspectRatioBox>
  </S.Container>
)

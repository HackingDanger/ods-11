import { Icon } from "components/icon"
import * as S from "./styles.js"

export const Faq = () => {

  return (
    <S.Container className="faq">
      <div className="faq_content">
        <h1 className="faq_content_title">Como podemos saber como resolver os problemas?</h1>
        <Icon name="arrow"/>
      </div>
    </S.Container>
  )
}
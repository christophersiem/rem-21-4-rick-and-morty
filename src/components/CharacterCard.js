import "./CharacterCard.css"
import styled from "styled-components/macro";

export default function CharacterCard({character}) {
    return (
        <CharacterCardContent>
            <CharacterCardTitle className="character-card__name">{character.name}</CharacterCardTitle>
            <img className="character-card__image" src={character.image} alt={character.name}/>
            <div className="character-card__origin">{character.origin.name}</div>
        </CharacterCardContent>
    )
}

const CharacterCardContent = styled.div`
  padding: 24px;
  width: 300px;
  text-align: center;
  border: 1px solid #333;
  border-radius: 12px;
  box-shadow: 1px 2px 8px #666;
`

const CharacterCardTitle = styled.h3`
  margin-bottom: 12px;
`


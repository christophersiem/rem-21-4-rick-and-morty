import CharacterCard from "./CharacterCard";
import './CharacterGallery.css'

export default function CharacterGallery({characters}) {

    return (
        <section className="character-gallery">
            {
                characters.map(character => <CharacterCard key={character.id} character={character}/>)
            }
        </section>
    )
}

import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/IHeroes"
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";

export const DcHeroes = () => {
    const[heros, setHeros] = useState<IHeroes[]>([]);
    const handleGetHeroesDC = () => {
        const result = heroesData.filter((hero) => hero.publisher == "DC Comics");
        setHeros(result)
    }

    useEffect(()=>{
        handleGetHeroesDC();
    }, []);
    return <ListHeroes heroes={heros} title="Heroes Dc Comics" />
}

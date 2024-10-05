import { FC } from "react"
import { IHeroes } from "../../../types/IHeroes"
import style from "./ListHeroes.module.css"
import { CardHero } from "../CardHero/CardHero"

interface IListHeroes{
    heroes: IHeroes[],
    title: string
}

export const ListHeroes: FC<IListHeroes> = ({heroes, title}) => {
    return (
        <div className={style.containerPrincipalList}>
            <div className={style.containerTitle}>
                <h2>{title}</h2>
            </div>
            <div className={style.containerList}>
                {heroes.map((hero)=>(
                    <CardHero hero={hero} key={hero.id} />
                ))}
            </div>
        </div>
    )
}

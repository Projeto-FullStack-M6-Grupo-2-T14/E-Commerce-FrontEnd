import { ChangeEvent, useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { TAnuncioData, anuncioFormSchema } from "./posterFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "src/contexts/userContext";
import { Tooltip } from "react-tooltip";
import { ApiCars } from "../../services/Api"

import styles from "./styles.module.sass"

interface IBrand {
    name: string
}

const Anuncio = () => {
    const [showCreate, setShowFilter] = useState(true);


    const toggleFilters = () => {
        setShowFilter(!showCreate)
    }

    //form
    const { anuncio } = useContext(UserContext)

    const { register, handleSubmit, formState: { errors } } = useForm<TAnuncioData>({
        resolver: zodResolver(anuncioFormSchema),
    });

    const submit: SubmitHandler<TAnuncioData> = (anuncioData) => {
        anuncio(anuncioData);
    };

    // api
    const [cars, setCars] = useState<any>({}),
        [brands, setBrands] = useState<string[]>([]),
        [brand, setBrand] = useState<string>(''),
        [carModels, setCarModel] = useState([])



    useEffect(() => {
        async function getCars() {
            try {
                const response = await ApiCars.get('')

                const carsData = response.data

                setCars(carsData)
                const keys: string[] = Object.keys(carsData)
                setBrands(keys)

            } catch (error) {
                console.error(error)
            }
        }

        getCars()
    }, [])

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedBrand = e.target.value

        setBrand(selectedBrand)
        selectedBrand ?
            setCarModel(cars[selectedBrand])
            : ''
    }



    return (
        <div id={styles.createAnuncio} className="{showCreate ? '' : styles.hidden} " >
            <form onSubmit={handleSubmit(submit)}>
                <div className={styles.modalTitle}>
                    <h1>Criar anúncio</h1>
                    <AiOutlineCloseSquare onClick={toggleFilters} />
                </div>
                <p>Informações do veículo</p>


                <div className={styles.inputBox}>
                    <label htmlFor="brand" className="heading-7-600">Marca</label>
                    <select
                        id="brand"
                        value={brand}
                        autoComplete="given-brand"
                        {...register("brand")}
                        onChange={handleChange}
                        data-tooltip-id="brand-tooltip"
                        data-tooltip-content={errors.brand ? errors.brand.message : ""}
                        data-tooltip-place="top"
                        data-tooltip-float={true}
                    >
                        <option value="" className={styles.selectPlaceholder}>Selecione uma marca</option>
                        {Object.keys(cars).map((car, i) => {
                            return (<option key={i}>{car}</option>)
                        })}

                    </select>
                    <Tooltip id='brand-tooltip' />
                </div>

                <div className={styles.inputBox}>
                    <label htmlFor="model" className="heading-7-600">Modelo</label>
                    <select
                        placeholder="Digite um model"
                        id="model"
                        autoComplete="given-model"
                        {...register("model")}
                        data-tooltip-id="model-tooltip"
                        data-tooltip-content={errors.model ? errors.model.message : ""}
                        data-tooltip-place="top"
                        data-tooltip-float={true}
                    >
                        <option value="" className={styles.selectPlaceholder}>Selecione um modelo</option>
                        {brand ? carModels.map((model, i) => {
                            return (<option key={i}>{model!.name}</option>)
                        }) : ''}
                    </select>
                    <Tooltip id="model-tooltip" />
                </div>

                <div className={styles.inputBox}>
                    <div className={styles.inputBoxContainer}>
                        <div>
                            <label htmlFor="year" className="heading-7-600">Ano</label>
                            <input
                                type="text"
                                placeholder="Digite o year"
                                id="year"
                                autoComplete="given-year"
                                {...register("year")}
                                data-tooltip-id="year-tooltip"
                                data-tooltip-content={errors.year ? errors.year.message : ""}
                                data-tooltip-place="top"
                                data-tooltip-float={true}
                            />
                            <Tooltip id="year-tooltip" />
                        </div>
                        <div>
                            <label htmlFor="fuel" className="heading-7-600">Combustível</label>
                            <input
                                type="text"
                                placeholder="Digitar o tipo de combustível"
                                id="fuel"
                                autoComplete="given-fuel"
                                {...register("fuel")}
                                data-tooltip-id="fuel-tooltip"
                                data-tooltip-content={errors.fuel ? errors.fuel.message : ""}
                                data-tooltip-place="top"
                                data-tooltip-float={true}
                            />
                            <Tooltip id="fuel-tooltip" />
                        </div>
                    </div>
                </div>

                <div className={styles.inputBox}>
                    <div className={styles.inputBoxContainer}>
                        <div>
                            <label htmlFor="mileage" className="heading-7-600">Quilometragem</label>
                            <input
                                type="text"
                                placeholder="Digite a mileage"
                                id="mileage"
                                autoComplete="given-mileage"
                                {...register("mileage")}
                                data-tooltip-id="mileage-tooltip"
                                data-tooltip-content={errors.mileage ? errors.mileage.message : ""}
                                data-tooltip-place="top"
                                data-tooltip-float={true}
                            />
                            <Tooltip id="mileage-tooltip" />
                        </div>
                        <div>
                            <label htmlFor="color" className="heading-7-600">Cor</label>
                            <input
                                type="text"
                                placeholder="Digite a color"
                                id="color"
                                autoComplete="given-color"
                                {...register("color")}
                                data-tooltip-id="color-tooltip"
                                data-tooltip-content={errors.color ? errors.color.message : ""}
                                data-tooltip-place="top"
                                data-tooltip-float={true}
                            />
                            <Tooltip id="color-tooltip" />
                        </div>
                    </div>
                </div>

                <div className={styles.inputBox}>
                    <div className={styles.inputBoxContainer}>
                        <div>
                            <label htmlFor="fipe" className="heading-7-600">Preço tabela FIPE</label>
                            <input
                                type="text"
                                placeholder="Digite o preço da FIPE"
                                id="fipe"
                                autoComplete="given-fipe"
                                {...register("fipePrice")}
                                data-tooltip-id="fipe-tooltip"
                                data-tooltip-content={errors.fipePrice ? errors.fipePrice.message : ""}
                                data-tooltip-place="top"
                                data-tooltip-float={true}
                            />
                            <Tooltip id="fipe-tooltip" />
                        </div>
                        <div>
                            <label htmlFor="price" className="heading-7-600">Preço</label>
                            <input
                                type="text"
                                placeholder="Digite o preço"
                                id="price"
                                autoComplete="given-price"
                                {...register("price")}
                                data-tooltip-id="price-tooltip"
                                data-tooltip-content={errors.price ? errors.price.message : ""}
                                data-tooltip-place="top"
                                data-tooltip-float={true}
                            />
                            <Tooltip id="price-tooltip" />
                        </div>
                    </div>
                </div>

                <div className={styles.inputBox}>
                    <label htmlFor="description" className="heading-7-600">Descrição</label>
                    <textarea
                        placeholder="Digite uma descrição"
                        id="description"
                        autoComplete="given-description"
                        {...register("description")}
                        data-tooltip-id="description-tooltip"
                        data-tooltip-content={errors.description ? errors.description.message : ""}
                        data-tooltip-place="top"
                        data-tooltip-float={true}
                    />
                    <Tooltip id="description-tooltip" />
                </div>

                <div className={styles.inputBox}>
                    <label htmlFor="cover-image" className="heading-7-600">Imagem da capa</label>
                    <input
                        type="text"
                        placeholder="https://image.com"
                        id="cover-image"
                        autoComplete="given-coverImage"
                        {...register("coverImage")}
                        data-tooltip-id="coverImage-tooltip"
                        data-tooltip-content={errors.coverImage ? errors.coverImage.message : ""}
                        data-tooltip-place="top"
                        data-tooltip-float={true}
                    />
                    <Tooltip id="coverImage-tooltip" />
                </div>

                <div className={styles.inputBox}>
                    <label htmlFor="galery-image" className="heading-7-600">Imagem da galeria</label>
                    <input
                        type="text"
                        placeholder="https://image.com"
                        id="galery-image"
                        autoComplete="given-galeryImage"
                        {...register("galeryImage")}
                        data-tooltip-id="galeryImage-tooltip"
                        data-tooltip-content={errors.galeryImage ? errors.galeryImage.message : ""}
                        data-tooltip-place="top"
                        data-tooltip-float={true}
                    />
                    <Tooltip id="galeryImage-tooltip" />
                </div>

                <button className={styles.addImages}>Adicionar campo para imagem da galeria</button>

                <div className={styles.buttonContainer}>
                    <button className={styles.buttonMediumText} onClick={toggleFilters}>Cancelar</button>
                    <button className={styles.buttonMediumText} type="submit">Criar anúncio</button>
                </div>

            </form>
        </div>

    )
}

export default Anuncio
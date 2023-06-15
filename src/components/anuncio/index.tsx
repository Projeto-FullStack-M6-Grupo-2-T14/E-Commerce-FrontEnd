import { SubmitHandler, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import "./styles.sass"
import { AiOutlineCloseSquare } from "react-icons/ai";
import { TAnuncioData, anuncioFormSchema } from "./anuncioFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "src/contexts/userContext";
import { Tooltip } from "react-tooltip";

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

    return (
        <div id="create-anuncio" className="{showCreate ? '' : 'hidden'} " >
            <form onSubmit={handleSubmit(submit)}>
                <div className="modal-title">
                    <h1>Criar anúncio</h1>
                    <AiOutlineCloseSquare onClick={toggleFilters} />
                </div>
                <p>Informações do veículo</p>

                <div className="input_box">
                    <label htmlFor="marca" className="heading-7-600">Marca</label>
                    <input
                        type="text"
                        placeholder="Digite uma marca"
                        id="marca"
                        autoComplete="given-marca"
                        {...register("marca")}
                        data-tooltip-id="marca-tooltip"
                        data-tooltip-content={errors.marca ? errors.marca.message : ""}
                        data-tooltip-place="top"
                        data-tooltip-float={true}
                    />
                    <Tooltip id="marca-tooltip" />
                </div>

                <div className="input_box">
                    <label htmlFor="modelo" className="heading-7-600">Modelo</label>
                    <input
                        type="text"
                        placeholder="Digite um modelo"
                        id="modelo"
                        autoComplete="given-modelo"
                        {...register("modelo")}
                        data-tooltip-id="modelo-tooltip"
                        data-tooltip-content={errors.modelo ? errors.modelo.message : ""}
                        data-tooltip-place="top"
                        data-tooltip-float={true}
                    />
                    <Tooltip id="modelo-tooltip" />
                </div>

                <div className="input_box">
                    <div className="input_box_container">
                        <div>
                            <label htmlFor="ano" className="heading-7-600">Ano</label>
                            <input
                                type="text"
                                placeholder="Digite o ano"
                                id="ano"
                                autoComplete="given-ano"
                                {...register("ano")}
                                data-tooltip-id="ano-tooltip"
                                data-tooltip-content={errors.ano ? errors.ano.message : ""}
                                data-tooltip-place="top"
                                data-tooltip-float={true}
                            />
                            <Tooltip id="ano-tooltip" />
                        </div>
                        <div>
                            <label htmlFor="combustivel" className="heading-7-600">Combustível</label>
                            <input
                                type="text"
                                placeholder="Digitar o tipo de combustível"
                                id="combustivel"
                                autoComplete="given-combustivel"
                                {...register("combustivel")}
                                data-tooltip-id="combustivel-tooltip"
                                data-tooltip-content={errors.combustivel ? errors.combustivel.message : ""}
                                data-tooltip-place="top"
                                data-tooltip-float={true}
                            />
                            <Tooltip id="combustivel-tooltip" />
                        </div>
                    </div>
                </div>

                <div className="input_box">
                    <div className="input_box_container">
                        <div>
                            <label htmlFor="quilometragem" className="heading-7-600">Quilometragem</label>
                            <input
                                type="text"
                                placeholder="Digite a quilometragem"
                                id="quilometragem"
                                autoComplete="given-quilometragem"
                                {...register("quilometragem")}
                                data-tooltip-id="quilometragem-tooltip"
                                data-tooltip-content={errors.quilometragem ? errors.quilometragem.message : ""}
                                data-tooltip-place="top"
                                data-tooltip-float={true}
                            />
                            <Tooltip id="quilometragem-tooltip" />
                        </div>
                        <div>
                            <label htmlFor="cor" className="heading-7-600">Cor</label>
                            <input
                                type="text"
                                placeholder="Digite a cor"
                                id="cor"
                                autoComplete="given-cor"
                                {...register("cor")}
                                data-tooltip-id="cor-tooltip"
                                data-tooltip-content={errors.cor ? errors.cor.message : ""}
                                data-tooltip-place="top"
                                data-tooltip-float={true}
                            />
                            <Tooltip id="cor-tooltip" />
                        </div>
                    </div>
                </div>

                <div className="input_box">
                    <div className="input_box_container">
                        <div>
                            <label htmlFor="fipe" className="heading-7-600">Preço tabela FIPE</label>
                            <input
                                type="text"
                                placeholder="Digite o preço da FIPE"
                                id="fipe"
                                autoComplete="given-fipe"
                                {...register("precoFipe")}
                                data-tooltip-id="fipe-tooltip"
                                data-tooltip-content={errors.precoFipe ? errors.precoFipe.message : ""}
                                data-tooltip-place="top"
                                data-tooltip-float={true}
                            />
                            <Tooltip id="fipe-tooltip" />
                        </div>
                        <div>
                            <label htmlFor="preco" className="heading-7-600">Preço</label>
                            <input
                                type="text"
                                placeholder="Digite o preço"
                                id="preco"
                                autoComplete="given-preco"
                                {...register("preco")}
                                data-tooltip-id="preco-tooltip"
                                data-tooltip-content={errors.preco ? errors.preco.message : ""}
                                data-tooltip-place="top"
                                data-tooltip-float={true}
                            />
                            <Tooltip id="preco-tooltip" />
                        </div>
                    </div>
                </div>

                <div className="input_box">
                    <label htmlFor="descricao" className="heading-7-600">Descrição</label>
                    <textarea
                        placeholder="Digite uma descrição"
                        id="descricao"
                        autoComplete="given-descricao"
                        {...register("descricao")}
                        data-tooltip-id="descricao-tooltip"
                        data-tooltip-content={errors.descricao ? errors.descricao.message : ""}
                        data-tooltip-place="top"
                        data-tooltip-float={true}
                    />
                    <Tooltip id="descricao-tooltip" />
                </div>

                <div className="input_box">
                    <label htmlFor="cape-image" className="heading-7-600">Imagem da capa</label>
                    <input
                        type="text"
                        placeholder="https://image.com"
                        id="cape-image"
                        autoComplete="given-imagemCapa"
                        {...register("imagemCapa")}
                        data-tooltip-id="imagemCapa-tooltip"
                        data-tooltip-content={errors.imagemCapa ? errors.imagemCapa.message : ""}
                        data-tooltip-place="top"
                        data-tooltip-float={true}
                    />
                    <Tooltip id="imagemCapa-tooltip" />
                </div>

                <div className="input_box">
                    <label htmlFor="galery-image" className="heading-7-600">Imagem da galeria</label>
                    <input
                        type="text"
                        placeholder="https://image.com"
                        id="galery-image"
                        autoComplete="given-imagemGaleria"
                        {...register("imagemGaleria")}
                        data-tooltip-id="imagemGaleria-tooltip"
                        data-tooltip-content={errors.imagemGaleria ? errors.imagemGaleria.message : ""}
                        data-tooltip-place="top"
                        data-tooltip-float={true}
                    />
                    <Tooltip id="imagemGaleria-tooltip" />
                </div>

                <button className="add-images">Adicionar campo para imagem da galeria</button>

                <div className="button-container">
                    <button className="button-medium-text" onClick={toggleFilters}>Cancelar</button>
                    <button className="button-medium-text" type="submit">Criar anúncio</button>
                </div>

            </form>
        </div>

    )
}

export default Anuncio
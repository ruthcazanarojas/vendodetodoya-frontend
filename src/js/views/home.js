import React from "react";
import "../../styles/home.scss";
import { images } from "../utils/images.js";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => {
	const categorias = [
		{
			nombre: "hogar",
			img: images.sofa
		},
		{
			nombre: "construcción",
			img: images.construccion
		},
		{
			nombre: "papelería",
			img: images.papeleria
		},
		{
			nombre: "bebés",
			img: images.sofa
		},
		{
			nombre: "juguetes",
			img: images.papeleria
		},
		{
			nombre: "libros",
			img: images.construccion
		},
		{
			nombre: "ropa",
			img: images.sofa
		},
		{
			nombre: "bodegón",
			img: images.papeleria
		},
		{
			nombre: "electrónicos",
			img: images.construccion
		},
		{
			nombre: "celulares",
			img: images.sofa
		}
	];
	return (
		<div className="container">
			<div className="d-flex flex-row justify-content-center buscador">
				<input type="text" placeholder="search..." />
			</div>
			{/* <div className="banner">
				<img src="https://via.placeholder.com/1200x675.png" />
				<h3>{"Promociones!"}</h3>
				<button className="btn btn-primary">{"Comprar sha!!"}</button>
				<Button variant="primary">{"Comprar ya!!"}</Button>
			</div> */}
			<Carousel className="my-3">
				<Carousel.Item>
					<img className="d-block w-100" src="https://via.placeholder.com/800x400.png" alt="First slide" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						<Button className="mt-3" variant="success">
							{"Compra ya!"}
						</Button>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="https://via.placeholder.com/800x400.png" alt="Second slide" />
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<Button className="mt-3" variant="success">
							{"Compra ya!"}
						</Button>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="https://via.placeholder.com/800x400.png" alt="Third slide" />
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						<Button className="mt-3" variant="success">
							{"Compra ya!"}
						</Button>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<div className="d-flex flex-row acciones">
				<div className="bt-accion bt-ventas">
					<span className="bt-name">{"VENTAS"}</span>
					<span className="bt-letter">{"V"}</span>
				</div>
				<div className="bt-accion bt-cambios">
					<span className="bt-name">{"CAMBIOS"}</span>
					<span className="bt-letter">{"C"}</span>
				</div>
				<div className="bt-accion bt-regalos">
					<span className="bt-name">{"REGALOS"}</span>
					<span className="bt-letter">{"R"}</span>
				</div>
				<div className="bt-accion bt-subastas">
					<span className="bt-name">{"SUBASTAS"}</span>
					<span className="bt-letter">{"S"}</span>
				</div>
			</div>
			<div className="principal">
				<div className="d-flex flex-md-column col-md-3 categorias">
					{categorias.map((categoria, index) => {
						return (
							<div key={index} className={"py-3 col-4 col-md bt-" + categoria.nombre}>
								<div className="d-flex flex-column flex-md-row bt-categoria">
									<div className="img-categorias">
										<img src={categoria.img} />
									</div>
									<div className="txt-categorias d-none">
										<h5>{categoria.nombre.toUpperCase()}</h5>
									</div>
								</div>
							</div>
						);
					})}
					{/* <div className="col-4 col-md flex-column flex-md-row bt-categoria bt-hogar">
						<div className="img-categorias">
							<img src={images.sofa} />
						</div>
						<div className="txt-categorias">
							<h3>HOGAR</h3>
						</div>
					</div>
					<div className="bt-categoria bt-papeleria">
						<img src={images.papeleria} />
						{"PAPELERÍA"}
					</div>
					<div className="bt-categoria bt-construccion">
						<img src={images.construccion} />
						{"CONSTRUCCIÓN"}
					</div>
					<div className="bt-categoria bt-bebes">{"BEBES"}</div>
					<div className="bt-categoria bt-juguetes">{"JUGUETES"}</div>
					<div className="bt-categoria bt-libros">{"LIBROS"}</div>
					<div className="bt-categoria bt-ropa">{"ROPA"}</div>
					<div className="bt-categoria bt-bodegon">{"BODEGÓN"}</div>
					<div className="bt-categoria bt-electronicos">{"ELECTRÓNICOS"}</div>
					<div className="bt-categoria bt-celulares">{"CELULARES"}</div> */}
				</div>
				<div className="productos" />
			</div>
		</div>
	);
};

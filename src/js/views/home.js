import React from "react";
import "../../styles/home.scss";
import { images } from "../utils/images.js";

export const Home = () => (
	<div className="container">
		<div className="buscador" />
		<div className="banner" />
		<div className="acciones">
			<div className="bt-ventas">{"VENTAS"}</div>
			<div className="bt-cambios">{"CAMBIOS"}</div>
			<div className="bt-regalos">{"REGALOS"}</div>
			<div className="bt-subastas">{"SUBASTAS"}</div>
		</div>

		<div className="principal">
			<div className="categorias">
				<div className="bt-categoria bt-hogar">
					<img src={images.sofa} />
					{"HOGAR"}
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
				<div className="bt-categoria bt-celulares">{"CELULARES"}</div>
			</div>
			<div className="productos" />
		</div>
	</div>
);

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ProductWrapper from './ProductWrapper'
import { IProduct } from '../models/product.model';
import { IPurchase } from '../models/purchase.model';
import { IPastillero } from '../models/pastillero.model';

function ProductList() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [purchases, setPurchases] = useState<IPurchase[]>([]);
  const baseURL = "https://private-anon-35fdce4eba-inventurestest.apiary-mock.com"
  let pastillero: IPastillero = {remedios: []};

  useEffect(() => {
    axios.get(`${baseURL}/products`).then((response) => {
      setProducts(response.data.payload);
    })
    axios.get(`${baseURL}/purchases`).then((response) => {
      setPurchases(response.data.payload);
    })
  }, [])

  function update_pastillero() {
      // Estructura diccionario, para guardar momentaneamente las cantidad de pastillas de cada remedio
      let actual_pills: IPastillero = {remedios: []};
      // Iterar sobre el historial de compras
      purchases.forEach((purchase: IPurchase) => {
        // Obtener la fecha de la compra
        let date = new Date(purchase.received_date);
        // Iterar sobre el detalle de la compra (remedios y su cantidad de pastillas compradas)
        purchase.details.forEach(detail => {
          // Calcular la cantidad de pastillas que se compraron y guardar la fecha de compra del remedio
          let pills = detail.quantity; // Cantidad de pastillas compradas
          if (!actual_pills.remedios.find(remedio => remedio.id === detail.product_id)) { // Si no existe el remedio asociado al id de la compra en el diccionario
            // Agregar el remedio al diccionario, junto a su cantidad y su fecha de compra
            actual_pills.remedios.push({
              id: detail.product_id,
              product: products.find(product => product.id === detail.product_id)!, // Obtener el remedio asociado al id de la compra (no null)
              purchase_date: date,
              quantity: pills
            });
          }
          else { // si el remedio ya está en el pastillero (Si existe el remedio asociado al id de la compra en el diccionario)
            let remedio = actual_pills.remedios.find(remedio => remedio.id === detail.product_id)! // Obtener el remedio asociado al id de la compra (no null)
            // Si la fecha asociada a la compra es posterior a la última fecha de compra asociada a ese remedio
            if (remedio.purchase_date < date) {
              // Se debe actualizar la fecha de compra, además de las pastillas restantes

              // Calcular la cantidad de pastillas consumidas por el cliente (Cantidad de días transcurridos desde la última compra)
              let days_in_milliseconds = date.getTime() - remedio.purchase_date.getTime();
              let days = days_in_milliseconds / (1000 * 60 * 60 * 24);
  
              // Calcular la cantidad de pastillas que quedan por consumir
              let pills = remedio.quantity - Math.floor(days);
  
              // Si la cantidad de pastillas queda en un número negativo, la seteamos a 0
              // (Puede ser porque las pastillas se acabaron antes de la fecha de compra o porque el consumo hizo que se acabaran)
              if (pills < 0) {
                pills = 0;
              }
  
              // Actualizar la fecha de compra, además de las pastillas restantes;
              actual_pills.remedios.find(remedio => remedio.id === detail.product_id)!.purchase_date = date;
              actual_pills.remedios.find(remedio => remedio.id === detail.product_id)!.quantity = (detail.quantity + pills)
            }
          }
        })
      })
      actual_pills.remedios.forEach(remedio => {
        let last_purchase_date = new Date(remedio.purchase_date);
        let today = new Date();
        let days_in_milliseconds = today.getTime() - last_purchase_date.getTime();
        let days = days_in_milliseconds / (1000 * 60 * 60 * 24);
        remedio.quantity -= Math.floor(days);
        if (remedio.quantity < 0) {
          remedio.quantity = 0;
        }
      })
      // Actualizar variable global del pastillero
      pastillero = actual_pills;
    };
    update_pastillero();
    console.log(pastillero);

  return (
    <>
    <ProductListTitle>
      <h2>Te queda</h2>
    </ProductListTitle>
    {products.map((product: IProduct) => {
      let pastillero_product_quantity = pastillero.remedios.find(remedio => remedio.id === product.id)?.quantity;
      if(pastillero_product_quantity === undefined) {
        pastillero_product_quantity = 0;
      }
      return <ProductWrapper imagesUrl={product.imagesUrl} name={product.name} concentration={product.concentration} quantity={pastillero_product_quantity}/> 
    })}
    </>
  )
}

export default ProductList

const ProductListTitle = styled.div`
  padding: 5px;
  background: #F5F5F5;
    h2{
        font-weight: bold;
        font-size: 19px;
        /* identical to box height */
        letter-spacing: 0.15px;
        color: #414046;
        margin: 5px 15px;
    }
`;

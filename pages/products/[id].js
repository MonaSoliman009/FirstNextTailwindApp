import React from 'react';
export const getStaticPaths = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(prd => {
      return {
        params: { id: prd.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://fakestoreapi.com/products/' + id);
    const data = await res.json();
  
    return {
      props: { prd: data }
    }
  }
const Details = ({ prd}) => {
  console.log(prd);
    return (
      <div>
      <h1>{prd.title}</h1>
      <p>{prd.category}</p>
      <p>{prd.description}</p>
      <img src={prd.image} alt="" className="h-10 w-10 rounded-full bg-gray-50" />

    </div>
    );
}

export default Details;

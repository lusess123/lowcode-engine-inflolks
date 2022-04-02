import { BuilderComponent, builder } from '@builder.io/react'
import { useState, useEffect } from 'react'

// import  '@steedos-ui/builder-object/dist/esm/builder-widgets'
builder.init('3db1270dae1f413c935f7c651752dfdd')
  
export const MyComponent = () => {
//   const [builderContentJson, setBuilderContentJson] = useState(null)

//   useEffect(() => { 
//     builder.get('page', { url: location.pathname })
//       .promise().then((a) => {
//         alert(JSON.stringify(a))
//         setBuilderContentJson(a)

//       })
//   }, [])

  return <BuilderComponent 
  apiKey='3db1270dae1f413c935f7c651752dfdd'
  entry="2805261228204e5a9e2727f036c76dc8"
  model="page"/>
}

export default MyComponent;

// // Register your components for use in the visual editor!
// // https://www.builder.io/blog/drag-drop-react
// const Heading = props => (
//   <h1 className="my-heading">{props.title}</h1>
// )

// Builder.registerComponent(Heading, { 
//   name: 'Heading',
//   inputs: [{ name: 'title', type: 'text' }]
// })
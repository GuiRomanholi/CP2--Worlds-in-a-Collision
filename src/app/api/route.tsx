import type { NextApiRequest, NextApiResponse } from 'next';

const fetchImagesFromNasa = async () => {
 const apiKey = ''; 
 const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=5`; 
 const response = await fetch(nasaUrl);
 const data = await response.json();
 return data;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
 if (req.method === 'GET') {
   try {
     const images = await fetchImagesFromNasa();  
     res.status(200).json(images);                
   } catch (error) {
     res.status(500).json({ message: 'Erro ao buscar imagens da NASA', error });
   }
 } else {
   res.status(405).json({ message: 'Método não permitido' }); 
 }
};
export default handler;
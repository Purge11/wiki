import React from 'react'
import { IconContext } from 'react-icons/lib';
import * as SiIcons from 'react-icons/si';

export default function Content() {
    return (
        <IconContext.Provider value={{ color: '#ff0000' }}>
        <div className='content '>
            <div class="container ">
                <div class="row  ">
                
                    <h1 className='d-flex justify-content-center mt-5 mb-5'>NosVoid Content Creators <div class="youtube-icn"><SiIcons.SiYoutube/></div> </h1>
                    <table class="table ">
                    
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col ">Youtube</th>
                                

                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=''>
                                <th scope="row danger">Aeri NosTale</th>
                                <td className=' '> <a href='https://www.youtube.com/channel/UCjdmjIFIzlI_CduzIAQvfug ' className='text-danger'>Channel</a></td>
                                
                                
                           </tr>
                           <tr className=''>
                                <th scope="row danger">DemenceG27 Nostale</th>
                                <td className=' '> <a href='https://www.youtube.com/c/DemenceStore/videos' className='text-danger'>Channel</a></td>
                               
                                
                           </tr>
                           <tr className=''>
                                <th scope="row danger">pedro tapia nosvoid español</th>
                                <td className=' '> <a href='https://www.youtube.com/channel/UCgphfXMIFVhfd7VS5zlCErQ/videos' className='text-danger'>Channel</a></td>
                             
                                
                           </tr> 
                           <tr className=''>
                                <th scope="row danger">Maybe</th>
                                <td className=' '> <a href='https://www.youtube.com/channel/UCl4q0dnNCWB3tjBd8rxFBOQ' className='text-danger'>Channel</a></td>
                                
                                
                           </tr>   
                           <tr className=''>
                                <th scope="row danger">RonaldRe NosTale</th>
                                <td className=' '> <a href='https://www.youtube.com/channel/UChz3nDzCHypzE24Nua3-CuQ' className='text-danger'>Channel</a></td>
                           
                                
                           </tr>  
                           <tr className=''>
                                <th scope="row danger">Monchoplay</th>
                                <td className=' '> <a href='https://www.youtube.com/c/MonchoplayYT/videos' className='text-danger'>Channel</a></td>
                                
                                
                           </tr> 
                           <tr className=''>
                                <th scope="row danger">Blake</th>
                                <td className=' '> <a href='https://www.youtube.com/channel/UC6YQX9AW3jRilHgfqnmkjtA' className='text-danger'>Channel</a></td>
                              
                                
                           </tr> 
                           

                        </tbody>
                        
                    </table>
                    <img src="asset/footer.jpg" alt=""/>
                   
                    <div className="footer">
                        <div className="text-center p-3">
                          
                           
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

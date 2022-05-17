import React from 'react'
import { IconContext } from 'react-icons/lib';
import * as SiIcons from 'react-icons/si';

export default function Content() {
    return (
        <IconContext.Provider value={{ color: '#ff0000' }}>
            <div className='content '>
                <div className="container ">
                    <div className="row  ">

                        <h1 className='d-flex justify-content-center mt-5 mb-5'>NosVoid Content Creators <div className="youtube-icn"><SiIcons.SiYoutube /></div> </h1>
                        <table className="table ">

                            <thead className="thead-dark">
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
                                    <th scope="row danger">Erean</th>
                                    <td className=' '> <a href='https://www.youtube.com/channel/UC6XIq0KY90Y3LHAoPI8Xhcw' className='text-danger'>Channel</a></td>


                                </tr>
                                <tr className=''>
                                    <th scope="row danger">LauLie</th>
                                    <td className=' '> <a href='https://www.youtube.com/channel/UCReA8noJWBmuPsqlsDuf58w' className='text-danger'>Channel</a></td>


                                </tr>
                                <tr className=''>
                                    <th scope="row danger">Expik</th>
                                    <td className=' '> <a href='https://www.youtube.com/channel/UCfNY6OoOn5zDji7FGjbA7ZA' className='text-danger'>Channel</a></td>


                                </tr>
                                


                            </tbody>

                        </table>


                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

import React, {useState, useEffect} from 'react';
import "../../styles/Catalog/Catalog.css";
import CatalogCard from './CatalogCard';

const Catalog = ({type, criteria, pageTitle}) => {

    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(true)

    const [data, setData] = useState([]);

    const increasePages = (e) =>{
        e.preventDefault();
        setPage(page + 1);
    }

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.themoviedb.org/3/${type}/${criteria}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}&append_to_response=external_ids`)
            .then(res => res.json())
            .then(res =>{
                if(!res.errors){
                    setTotalPages(res.total_pages);
                    setData([...data, ...res.results]);
                    setLoading(false);
                }else{
                    setData([]);
                }
            })
    }, [page]);

    return (
        data
        ?(
            <section className="catalog_section">
            <div className="media">
                <div className="column_wrapper">
                    <div className="content_wrapper">
                        <div className="title">
                            <h2>{pageTitle}</h2>
                        </div>
                        <div className="content">
                            <div className="sub">
                                <div className="white_column">
                                    <section className="media_results">
                                        <div className="media_items">
                                            <div className="page_wrapper">
                                            {data.length>0 && 
                                                data.map(movie=> (
                                                <CatalogCard key={movie.id} type={type} data={movie} />
                                                ))}
                                             )
                                            </div>
                                            <div className="pagination">
                                                {totalPages !== page && 
                                                <p className="btn-load-more" onClick={ increasePages }>
                                                    <a className="text" href="">{isLoading ? 'Loading...' : 'Load More'}</a>
                                                </p>}
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
        : ( <div>Loading...</div> )
    )
}

export default Catalog

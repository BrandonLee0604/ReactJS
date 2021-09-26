import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    // Watch when update 'term' and set up timer for debouncedTerm
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    // Watch to update 'term'
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                }
            });

            setResults(data.query.search);
        };
        search();
    }, [debouncedTerm]);
    
    // useEffect(() => {
    //     // 3 method to apply async await to the arrow function      
    //     // Method 1: call the method immediately after define it
    //     // (async () => {
    //     //     await axios.get('sadad');
    //     // })();

    //     // Method 2: Use promise
    //     // axios.get('sdsds').then((response) => {
    //     //     console.log(response.data);
    //     // });

    //     // Method 3:
        

    //     // If it's the first time initialize the page(having 'term', not 'results'), then do the search immediately
    //     if (term && !results.length) {
    //         search();
    //     } else {
    //         // set up the timer of 1000ms and then do the search
    //         const timeoutId = setTimeout(() => {
    //             if (term) {
    //                 search();
    //             }
    //         }, 1000);

    //         // clean up function to clear the timer
    //         return () => {
    //             clearTimeout(timeoutId);
    //         };
    //     }

    // }, [term, results.length]);

    const renderedResult = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?rurid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResult}</div>
        </div>
    );
};

export default Search;
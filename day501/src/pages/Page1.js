import React from 'react';
import querystring from 'query-string';

const Page1 = (props) => {
    // console.log(props);
    const {match, location} = props;
    console.log(match);
    console.log(location);
    console.log(querystring.parse(location.search));
    
    const query = querystring.parse(location.search)
    return (
        <div>
            <h2>Page1 페이지입니다.</h2>
            url : {match.url}<br />
            url : {location.pathname}<br />
            페이지번호 : {match.params.param}<br />
            type : {match.params.param2}<br />
            no : {query.no}<br />
            type : {query.type}<br />
        </div>
    );
};

export default Page1;
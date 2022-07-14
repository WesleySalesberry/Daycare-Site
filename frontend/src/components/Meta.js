import React from 'react'
import { Helmet } from "react-helmet-async";

export const Meta = ({ title, description, keywords, url }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={url} />
            <meta
                name="twitter:title"
                content={title}
            />
            <meta name="twitter:creator" content="@jauntycoder" />
            <meta name="twitter:site" content="@jauntycoder" />
            <meta
                name="twitter:description"
                content={description}
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta
                property="og:title"
                content={title}
            />
            <meta
                property="og:description"
                content={description}
            />
            <meta
                property="og:image"
                content="https://designcode.io/cloud/v2/twitter.jpg"
            />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome To Daycare Site',
    description: 'A 5 Star daycare that',
    keywords: 'Daycare sitename',
    url: window.location.href
}
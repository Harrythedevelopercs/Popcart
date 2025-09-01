// const fetchAPI = async (query) => {
//     try {
//         const res = await fetch(
//             `${process.env.NEXT_PUBLIC_GRAPH_ENDPOINT}?query=${encodeURIComponent(query)}`,
//             {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                 }
//             }
//         );

//         if (!res.ok) {
//             console.error('Network response was not ok:', res.statusText);
//             throw new Error(`Network response was not ok: ${res.statusText}`);
//         }

//         const json = await res.json();

//         if (json.errors) {
//             console.error('API returned errors:', json.errors);
//             throw new Error('Failed to fetch API: ' + JSON.stringify(json.errors));
//         }

//         return json.data;
//     } catch (error) {
//         console.error('Error fetching API:', error);
//         throw new Error('API request failed: ' + error.message);
//     }
// };

// export const getPostList = async (endCursor = null, taxonomy = null) => {
//     let condition = `after: "${endCursor}", first: 6, where: {orderby: {field: DATE, order: DESC}}`;

//     if (taxonomy) {
//         condition += `, ${taxonomy.key}: "${taxonomy.value}"`;
//     }

//     const query = `{
//         bsps {
//             nodes {
//                 date
//                 slug
//                 title
//                 excerpt(format: RENDERED)
//                 featuredImage {
//                     node {
//                         mediaDetails {
//                             file
//                             sizes {
//                                 sourceUrl
//                                 width
//                                 height
//                             }
//                         }
//                     }
//                 }
//                 author {
//                     node {
//                         name
//                         avatar {
//                             url
//                         }
//                         description
//                     }
//                 }
//                 bSPCategories {
//                     nodes {
//                         name
//                         slug
//                     }
//                 }
//             }
//         }
//     }`;

//     const data = await fetchAPI(query);
//     return data.bsps.nodes;

// };

// export const getSinglePost = async (slug = "diy-vs-hiring-book-cover-designers-deciding-whats-best") => {
//     const query = `{
//         bspBy(slug: "${slug}") {
//             content(format: RENDERED)
//             date
//             excerpt(format: RENDERED)
//             modified
//             slug
//             title(format: RENDERED)
//             databaseId
//             featuredImage {
//                 node {
//                     mediaDetails {
//                         file
//                         sizes {
//                             sourceUrl
//                             width
//                             height
//                         }
//                     }
//                 }
//             }
//             author {
//                 node {
//                     name
//                     avatar {
//                         url
//                     }
//                     description
//                 }
//             }
//             bSPCategories {
//                 nodes {
//                     name
//                     slug
//                 }
//             }
//         }
//     }`;

//     const data = await fetchAPI(query);
//     return data.bspBy
// };

import Head from 'next/head';
import styles from '../styles/pages/Home.module.scss';
import {ApolloClient, gql, InMemoryCache} from '@apollo/client';
import TabPanel from '../components/TabPanel';
import {TAB_NAMES} from '../data/tabs';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Graph</title>
      </Head>
      <main className={styles.main}>
        <TabPanel items={TAB_NAMES}/>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/graphprotocol/graph-network-mainnet',
    cache: new InMemoryCache()
  });

  const {data} = await client.query({
    query: gql`
        query getAllSubgraphsData {
            subgraphs {
                currentVersion {
                    subgraph {
                        active
                        displayName
                        createdAt
                        image
                    }
                    subgraphDeployment {
                        signalledTokens
                        stakedTokens
                        queryFeesAmount
                    }
                }
            }
        }
    `
  });

  return {
    props: {
      data
    }
  };
}

/*
query getSubgraphs {
            subgraphs(
                first: 1000
                skip: 0
                subgraphError: deny
                where: {active: true, currentVersion_not: null, entityVersion: 2,
                    currentVersion_: {
                        subgraphDeployment_: {
                            createdAt: 1660337072
                        }
                    }
                }
                orderBy: displayName
                orderDirection: asc
            ) {
                id
                active
                image
                displayName
                currentVersion {
                    createdAt
                    subgraphDeployment {
                        id
                        originalName
                        signalledTokens
                        stakedTokens
                        queryFeesAmount
                    }
                }
            }
        }
*/


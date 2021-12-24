import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import Grid from '../../components/Grid';
import NowPlaying from '../../components/Spotify';

const Minimal = () => {
  return (
    <>
      <Head>
        <title>Anthony Young</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow mx-4">
        <Grid>
          <Grid.column
            full
            className="flex flex-col align-middle justify-center min-h-[50px] "
          >
            {/* rounded-md bg-gradient-to-bl from-gray-600 to-black shadow-gray-400 drop-shadow-xl */}
            <div className="text-5xl font-extrabold text-black text-center">
              Anthony Young
            </div>
          </Grid.column>
          <Grid.column className=" min-h-[100px] rounded-md bg-gradient-to-bl from-red-100 to-red-600 shadow-red-400 drop-shadow-xl">
            Test 2
          </Grid.column>
          <Grid.column className=" min-h-[100px] rounded-md bg-gradient-to-bl from-green-200 to-green-600 shadow-green-400 drop-shadow-xl">
            <NowPlaying />
          </Grid.column>
          <Grid.column className="flex flex-col align-middle justify-center min-h-[100px] rounded-md bg-gradient-to-bl from-blue-200 to-blue-600 shadow-blue-400 drop-shadow-xl">
            <StyledLink href={`/blog`}>
              <div className="text-5xl font-extrabold text-white text-center border">
                Blog
              </div>
            </StyledLink>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="256px"
              height="256px"
              viewBox="0 0 256 256"
              className="flex flex-col h-6 w-6 ml-auto mt-[-2px]"
            >
              <path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V200a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216,40ZM180,168H76a8,8,0,0,1,0-16H180a8,8,0,0,1,0,16Zm0-32H76a8,8,0,0,1,0-16H180a8,8,0,0,1,0,16Zm0-32H76a8,8,0,0,1,0-16H180a8,8,0,0,1,0,16Z" />
            </svg> */}
          </Grid.column>
          <Grid.column className="flex flex-col align-middle justify-center min-h-[100px] rounded-md bg-gradient-to-bl from-yellow-200 to-yellow-400 shadow-yellow-400 drop-shadow-xl">
            <div className="text-5xl font-extrabold text-white text-center">
              Code
            </div>
          </Grid.column>
          <Grid.column className="flex flex-col align-middle justify-center min-h-[100px] rounded-md bg-gradient-to-bl from-orange-200 to-orange-400 shadow-orange-400 drop-shadow-xl">
            <StyledLink href={`/about`}>
              <div className="text-5xl font-extrabold text-white text-center">
                About
              </div>
            </StyledLink>
          </Grid.column>
          <Grid.column canvas className="overflow-hidden rounded-md">
            <StyledCard>
              <div className="text-5xl font-extrabold text-white shadow-black drop-shadow-md text-center">
                Unsplash
              </div>
            </StyledCard>
          </Grid.column>
          <Grid.column
            full
            className="flex flex-col align-middle justify-center min-h-[50px] "
          >
            <footer className="flex justify-center align-middle">
              <a
                href="https://vercel.com?utm_source=fan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center align-middle"
              >
                Proudly Powered by{' '}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className="mt-1 pl-2 h-4"
                />
              </a>
            </footer>
          </Grid.column>
        </Grid>
      </main>
    </>
  );
};

const StyledLink = styled(Link)`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const StyledCard = styled.div`
  align-items: center;
  background-image: url('https://source.unsplash.com/user/ayoungh');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100%;
  min-height: 100px;
  justify-content: center;
`;

export default Minimal;

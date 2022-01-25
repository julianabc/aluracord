import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';

/* O que está abaixo foi feito apenas para fins de estudo. Deixar aqui:

function HomePage() {
    return (
    <div>
        <h1>Hello, Sidney. </h1>
        <h2>What's your favorite scary movie?</h2>

        <style jsx>{`
        h1 {
            color: red;
        }
         `}</style>

    </div>
    )
  }
  
  export default HomePage
  
*/


// função global para o css in javasript necessário para a aplicação
function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 

      `}</style>
    );
  }

  // pode trabalhar com partes diferentes em cada função, aqui o trabalho é no titulo
  function Titulo(props) { // recebe a frase entre titulo como parametro 
    const Tag = props.tag; // deixar o estilo dinamico
    return (
      <>
        <Tag>{props.children}</Tag> 
        <style jsx>{`
              ${Tag} {
                  color: ${appConfig.theme.colors.neutrals['000']};
                  font-size: 24px;
                  font-weight: 600;
              }
              `}</style>
      </>
    );
  }

  function SubTitle(props){
    const SubT = props.tag;
    return(
      <>
        <SubT>{props.children}</SubT>
        <style jsx>{`
            ${SubT} {
                color: ${appConfig.theme.colors.primary[999]};
                font-size: 15px;
                font-weight: 600;
              }
        `}</style>
        
      </>
    )
  }




  // função principal para ser renderizada na pagina
  export default function PaginaInicial() {
    const username = 'julianabc'; // mudando para o meu github
  
    return (
      <>
        <GlobalStyle />
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            // mudar essa imagem aqui 
            backgroundImage: 'url(https://wallpaperaccess.com/full/1824839.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[9200],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              
              <Titulo tag="h2">Hello, {username}.</Titulo>
              
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}

              <SubTitle tag="h3"> What's your favorite scary movie?</SubTitle>

              </Text>
  
              <TextField
                fullWidth
                placeholder='Digite o seu nome: '
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />

              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
              />
              
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[900],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }
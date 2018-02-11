import * as actionTypes from '../actions/actionTypes';

const initialState = {
    episodes: [{
        id: '1',
        podcastId: '1',
        title: 'Shazam! &#124; Diretor revela como será o logo das Indústrias Silvana no filme',
        description: `<p>Alguns usuários do <em>Reddit </em>estavam se questionando como seria legal se as primeiras imagens oficiais de <strong>&#8220;Shazam!&#8221; </strong>fossem postadas naquele site, quando o próprio diretor do filme <strong>David F. Sandberg</strong> (<em>“Annabelle 2: A Criação do Mal”</em>) postou a primeira imagem do logo das indústrias do vilão, <strong>Dr. Silvana</strong>. Vale ressaltar que, quando da publicação das primeiras histórias em quadrinhos do Shazam no Brasil, o nome &#8220;Sivana&#8221; foi adaptado como &#8220;Silvana&#8221;. Veja a imagem abaixo:</p>
        <p><img class="alignnone size-medium wp-image-477831" src="http://cinemacomrapadura.com.br/imagens/2018/02/20180210-sivana-shazam-1-461x615.jpg" alt="" width="461" height="615" srcset="http://cinemacomrapadura.com.br/imagens/2018/02/20180210-sivana-shazam-1-461x615.jpg 461w, http://cinemacomrapadura.com.br/imagens/2018/02/20180210-sivana-shazam-1.jpg 628w" sizes="(max-width: 461px) 100vw, 461px" /></p>
        <p>“Shazam!” traz a história de Billy Batson, uma criança órfã que ganha a habilidade de se tornar um herói adulto com poderes divinos ao proferir a palavra “Shazam”, adquirindo a sabedoria de Salomão, a força de Hércules, a resistência de Atlas, os poderes de Zeus, a coragem de Aquiles e a velocidade de Mercúrio.</p>
        <p>Além de Zachary Levi (<em>&#8220;Thor: Ragnarok&#8221;</em>)<em>,</em> que interpreta o herói, o elenco ainda conta com Asher Angel (da série “<em>Andi Mack</em>“) como o jovem Billy Batson, Mark Strong (“<em>Kingsman: O Círculo Dourado </em>“), Jack Dylan Grazer (“<em>It: A Coisa</em>“), Ron Cephas Jones e Faithe C. Herman (ambos da série “<em>This Is U</em>s”).</p>
        <p>“Shazam!” chega aos cinemas em 05 de abril de 2019.`,
    }, {
        id: '2',
        podcastId: '1',
        title: 'Han Solo: Uma História Star Wars &#124; Kathleen Kennedy explica saída de Chris Miller e Phil Lord',
        description: `<p>Em entrevista para o <em>Entertainment Weekly,</em> a presidente da <em>Lucasfilm</em>, <strong>Kathleen Kennedy</strong>, explicou a razão da saída dos diretores <strong>Chris Miller e Phil Lord</strong> (<em>&#8220;Uma Aventura Lego&#8221;</em>) de <strong>&#8220;Han Solo: Uma História Star Wars&#8221;</strong>. Eles foram trocados por <strong>Ron Howard </strong>(<em>&#8220;Inferno&#8221;</em>) durante as filmagens, alegando diferenças criativas. Ela relatou que:</p>
        <blockquote><p><strong><em>&#8220;(Chris) Miller e (Phil) Lord são hilários, mas eles têm experiência em animações e comédias, e quando você está fazendo um filme desse tipo há um grande espaço para improvisações, elas são feitas o tempo inteiro, mas precisa estar inserido em uma estrutura específica ou você não consegue terminar o trabalho e não consegue antecipar as coisas para já ter tudo pronto. Então acabou literalmente sendo sobre o processo. Apenas sobre entregar no tempo certo.&#8221;</em></strong></p></blockquote>
        <p>A explicação é bastante parecida com <a href="http://cinemacomrapadura.com.br/noticias/453011/star-wars-han-solo-saiba-mais-sobre-os-problemas-que-causaram-a-demissao-dos-diretores/">os rumores que circulavam à época da demissão</a>, que apontavam o excesso de improvisações dos diretores e o não cumprimento do cronograma estipulado.</p>
        <p>A trama do filme contará a história de Han Solo (Alden Ehrenreich, de “A<em>ve, César!</em>“) e suas aventuras no mundo criminoso a bordo da Millenium Falcon e ao lado de seu copiloto Chewbacca. Solo encontrará o notório apostador Lando Calrissian (Donald Glover, de “<em>Homem-Aranha: De Volta ao Lar</em>“) em uma jornada que irá definir o caminho de um dos heróis mais improváveis ​​da saga da “Star Wars”.</p>
        <p>O elenco conta ainda com Emilia Clarke (“<em>Como Eu Era Antes de Você</em>“), Woody Harrelson (“<em>Três Anúncios Para Um Crime</em>“), Phoebe Waller-Bridge (“<em>(Des)encontro Perfeito</em>“) e Paul Bettany (“<em>Capitão América”Guerra Civil</em>“).</p>
        <p>“Han Solo: Uma História Star Wars” estreia dia 24 de maio de 2018.`,
    }, {
        id: '3',
        podcastId: '2',
        title: 'NerdCast 606 - Segredos dos Restaurantes',
        description: `Neste podcast: Coma pastel de picanha, não brigue na cozinha e descubra todos os segredos do funcionamento de um restaurante.
        ARTE DA VITRINE:  André Carvalho
        Magazine Luiza

             Carnaval nerd no Magazine Luiza!
             10% de desconto na categoria games usando o cupom "blocomagalu".
             Baixe o App: https://magazineluiza.onelink.me/589508454/505201f9

        Pic Pay

             Compre créditos para sua Steam e tenha R$ 10 de cashback na primeira compra!
             https://www.picpay.com/site/download

        Flash Black Friday Nerdstore

             Tudo o que é bom, merece ser lembrado.
             Acesse: http://bit.ly/2EQjn8X

        Nerdcast Stories


        Assista: Ataque Cardiaco
        E-MAILS

             Mande suas críticas, elogios, sugestões e caneladas para nerdcast@jovemnerd.com.br

        EDIÇÃO COMPLETA POR RADIOFOBIA PODCAST E MULTIMÍDIA

             http://radiofobia.com.br
        `,
    }, {
        id: '4',
        podcastId: '2',
        title: 'NerdCast 605 - Batalha de Crossovers 7',
        description: `Neste podcast: Encontraremos de Saitama a Mario, de Orcs a Replicantes. Nosso octógono de crossovers está cheio novamente para mais uma batalha!
        ARTE DA VITRINE:  André Carvalho
        Magazine Luiza

             10% de de desconto na categoria de esporte lazer pra quem baixar app e usar o cupom "maridodagisele".
             Baixe o App: http://maga.lu/2nhCWPR

        Novas Camisetas Exclusivas Nerdstore

             House of Tiamat, Bad to the Bone e Flesh Wound.
             Garanta já a sua: http://bit.ly/2y1Lr7x

        Nerdtech

             Nerdtech 24 - Bugs:
             Playlist completa Nerdtech: https://goo.gl/18WWFs
             Toda a PRIMEIRA sexta-feira do mês você vai ter um Nerdcast extra sobre tecnologia.
             Acesse: http://www.alura.com.br/promocao/nerd

        Nerdcast Stories


        Assista: Não me arrependo de nada!
        E-MAILS

             Mande suas críticas, elogios, sugestões e caneladas para nerdcast@jovemnerd.com.br

        OUÇA TAMBÉM

             Playlist completa Batalha dos Crossovers: http://bit.ly/2dw8cFJ

        EDIÇÃO COMPLETA POR RADIOFOBIA PODCAST E MULTIMÍDIA

             http://radiofobia.com.br

        `,
    }],
    selectedEpisodes: [],
    selectedEpisode: {},
    loading: false
};

const loadPodcastEpisodes = (state, action) => ({
    ...state,
    selectedEpisode: {
      title: 'Today we gonna speak about something',
    },
    loading: false,
});

const selectPodcastEpisodes = (state, action) => ({
    ...state,
    selectedEpisodes: state.episodes.filter((episode) => episode.podcastId === action.podcastId),
});

const selectPodcastEpisode = (state, action) => ({
    ...state,
    selectedEpisode: state.selectedEpisodes.filter((episode) => episode.id === action.episodeId)[0],
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOAD_PODCAST_EPISODES: return loadPodcastEpisodes(state, action);
        case actionTypes.SELECT_PODCAST_EPISODES: return selectPodcastEpisodes(state, action);
        case actionTypes.SELECT_PODCAST_EPISODE: return selectPodcastEpisode(state, action);
        default: return state;
    }
}

export default reducer;

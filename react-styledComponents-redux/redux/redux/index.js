const redux = require('redux');                                 // 1) importa redux e registra o createStore(cria o store) e o bindActionCreators (conecta as actions)
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const applyMiddleware = redux.applyMiddleware;

const orderCake = () => { return { type: "ORDER_CAKE" }}        // 2) cria as ações numa funçao que retorna uma chave type e (caso vc queira) outras chaves optativas
const makeCake = (quantity) => { return { type: "MAKE_CAKE", quantity: quantity }} // 2.5) geralmente, usamos a chave "payload" para qualquer coisa adicional mas vou usar
                                                                                   // quantity pra ser mais ilustrativo

const initialState = { numOfCakes: 0 };                         // 3) cria o initial state, que será o manipulavel

const reducer = (state = initialState, action) => {             // 4) cria o reducer(initial state, action) e no switch case referencia a açao como action.type (é uma
    switch (action.type) {                                      // convenção do redux para identificar que é uma ação)
        case "ORDER_CAKE":
            return {...state, numOfCakes: state.numOfCakes - 1 };

        case "MAKE_CAKE":
            return {...state, numOfCakes: state.numOfCakes + action.quantity };

        default:
            return state;
    };
};

const store = createStore(reducer);                             // 5) cria o store, passando o reducer, que irá manipular o estado da aplicação
const unsubscribe = store.subscribe( () => console.log(`Estado da aplicação alterado: ${store.getState().numOfCakes}`) ); // 6) cria o subscribe, que irá fazer algo toda vez que
                                                                // o estado da aplicação for alterado
store.dispatch(makeCake(2));                                    //  6) cria os dispatch({type: nomedaaçao}) para finalmente mmudar o estado da aplicaçao
store.dispatch(makeCake(3));
store.dispatch(makeCake(1));
store.dispatch(makeCake(1));
store.dispatch(makeCake(5));
store.dispatch(makeCake(6));
store.dispatch(orderCake());

const actions = bindActionCreators({ orderCake, makeCake }, store.dispatch); // 6.5) conecta as aactions numa variavel, sendo uma alternativa para dar o comando dispatch
actions.orderCake()
actions.makeCake(3)

unsubscribe();                                                  // 7) caso queiramos, podemos também desativar o subscribe deste modo

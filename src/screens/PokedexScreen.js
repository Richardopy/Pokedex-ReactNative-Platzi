import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView } from "react-native";
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon';

const PokedexScreen = () => {
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaView>
      <Text> Pokedex </Text>
    </SafeAreaView>
  );
};

export default PokedexScreen;

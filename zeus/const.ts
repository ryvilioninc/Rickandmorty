/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Query:{
		pokemons:{
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		pokemon:{
			id:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			name:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Query:{
		query:"Query",
		pokemons:"Pokemon",
		pokemon:"Pokemon"
	},
	Pokemon:{
		id:"ID",
		number:"String",
		name:"String",
		weight:"PokemonDimension",
		height:"PokemonDimension",
		classification:"String",
		types:"String",
		resistant:"String",
		attacks:"PokemonAttack",
		weaknesses:"String",
		fleeRate:"Float",
		maxCP:"Int",
		evolutions:"Pokemon",
		evolutionRequirements:"PokemonEvolutionRequirement",
		maxHP:"Int",
		image:"String"
	},
	PokemonDimension:{
		minimum:"String",
		maximum:"String"
	},
	PokemonAttack:{
		fast:"Attack",
		special:"Attack"
	},
	Attack:{
		name:"String",
		type:"String",
		damage:"Int"
	},
	PokemonEvolutionRequirement:{
		amount:"Int",
		name:"String"
	}
}
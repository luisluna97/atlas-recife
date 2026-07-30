# Modelo de identidade v0

## Problema

Uma “empresa” pode representar grupo econômico, marca, CNPJ, unidade física,
perfil do Google, domínio, site e Instagram. Esses objetos se relacionam, mas
não são equivalentes.

## Entidades

### organization

Organização ou grupo que controla outras entidades. Pode não ser visível ao
público.

### brand

Identidade comercial reconhecida pelo mercado. Pode operar várias unidades e
ser usada por mais de uma pessoa jurídica.

### legal_entity

Pessoa jurídica responsável por atividades legais. O CNPJ é atributo sensível à
finalidade e só deve ser coletado quando público, necessário e justificável.

### business_location

Unidade física específica, com endereço e coordenadas. Uma unidade pode possuir
listing e contatos próprios.

### digital_property

Ativo digital relacionado a uma ou mais entidades:

- domain;
- website;
- social_profile;
- listing;
- analytics_property;
- advertising_property.

### contact_point

Telefone, WhatsApp, e-mail, formulário ou outro canal, com escopo:

- corporativo;
- marca;
- unidade;
- propriedade digital;
- pessoa, quando permitido.

### relationship

Ligação temporal entre duas entidades:

- `owns`;
- `operates`;
- `uses_brand`;
- `located_at`;
- `represents`;
- `has_property`;
- `has_contact`;
- `same_as_candidate`;
- `competes_with`.

## Regra de identidade

Nenhuma relação vira fato apenas por igualdade de nome. Um match usa sinais
combinados e preserva:

- método;
- evidências;
- confiança;
- validade;
- responsável;
- versão.

## Estados de resolução

- `unresolved`: registro ainda isolado;
- `candidate`: possível correspondência;
- `confirmed`: correspondência aceita por regra ou revisão;
- `conflicted`: evidências incompatíveis;
- `rejected`: correspondência descartada;
- `superseded`: substituída por resolução posterior.

## Chaves candidatas

Nenhuma chave isolada resolve todos os casos. Sinais possíveis:

- CNPJ;
- domínio normalizado;
- telefone normalizado;
- endereço normalizado;
- coordenadas;
- identificador oficial da fonte;
- nome e categoria;
- links cruzados entre site e redes.

## Temporalidade

Identidade e propriedade mudam. Relações possuem `valid_from`, `valid_to` e
momento de observação. Troca de domínio, telefone ou operador não apaga o
histórico.

## Exemplo

```text
organization ──owns────────────→ legal_entity
      │
      └──operates──────────────→ brand
                                  │
                                  ├──operates──→ business_location
                                  │                 └──has_property──→ listing
                                  └──has_property──→ website
                                                    └──links_to──────→ social_profile
```

## Decisões abertas

- quando CNPJ é necessário;
- nível mínimo de confiança para `confirmed`;
- quais relações exigem revisão humana;
- como tratar franquias;
- como representar profissionais dentro de clínicas;
- como resolver marcas que compartilham telefone ou domínio;
- política de merge e desmembramento.

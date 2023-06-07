# GS-Hybid-Mobile

/alimento : Este endpoint retorna uma lista de todos os produtos alimentícios. O
corpo da resposta é uma matriz JSON de objetos, cada um representando um
produto alimentício. Cada objeto tem as seguintes propriedades:
- id_alimento: O ID do produto alimentício.
- nm_alimento: O nome do produto alimentício.
- desc_alimento: Uma descrição do produto alimentar.
- cat_alimento: A categoria de comida.
- origem_alimento: A origem do produto alimentício.
- /alimentos/{id_alimento}: Este endpoint retorna um único
produto alimentício por ID. O corpo da resposta é um objeto
JSON, que tem as mesmas propriedades que o corpo da
resposta para o endpoint /alimento.
/fazenda: esse endpoint retorna uma lista de todos os farms. O
corpo da resposta é uma matriz JSON de objetos, cada um
representando um farm. Cada objeto tem as seguintes
- propriedades:
- id_fazenda: O ID da fazenda.
- nm_fazenda: O nome da fazenda.
- end_fazenda: O endereço da fazenda.
- cont_fazenda: as informações de contato da fazenda.
/ distribuidor: Este endpoint retorna uma lista de todos os
distribuidores. O corpo da resposta é uma matriz JSON de
objetos, cada um representando um distribuidor. Cada objeto
tem as seguintes propriedades:
- id_distribuidor: O ID do distribuidor.
- nm_distribuidor: O nome do distribuidor.
- end_distribuidor: O endereço do distribuidor.
- cont_distribuidor: as informações de contato do distribuidor.
- /nutricao: Este endpoint retorna uma lista de todas as
informações nutricionais de produtos alimentícios. O corpo da
resposta é uma matriz JSON de objetos, cada um
representando uma informação nutricional para um produto
alimentar. Cada objeto tem as seguintes propriedades:
- id_alimento: O ID do produto alimentício.
- calorias: O número de calorias no produto alimentar.
- gord_totais: A quantidade total de gordura no produto
alimentar.
- gord_saturada: A quantidade de gordura saturada no produto
alimentar.
- gord_trans: A quantidade de gordura trans no produto
alimentar.
c- olesterol: A quantidade de colesterol no produto alimentar.
- sódio: A quantidade de sódio no produto alimentar.
- carbo: A quantidade de hidratos de carbono no produto
alimentar.
- açúcar: A quantidade de açúcar no produto alimentar.
- proteínas: A quantidade de proteínas no produto alimentar.
- fibra_alimentar: A quantidade de fibra dietética no produto
alimentar
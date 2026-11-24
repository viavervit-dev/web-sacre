# Glosario de copy para Ecuador

Fuentes leídas el 2026-11-24, salvo las marcadas como no leídas. Este archivo es idéntico en `admin-panel-sacre` y `web-sacre`.

## Términos que no se usan

| Término | Por qué | Usar | Fuente |
| --- | --- | --- | --- |
| santería (la tienda) | En Ecuador es una creencia en los poderes de los santos y del santero, o un local de santería y esoterismo. Según el DAMER, solo en Argentina y Chile es una tienda de imágenes religiosas. La prensa ecuatoriana la asocia con brujería y bandas | artículos religiosos, objetos religiosos, tienda de artículos religiosos | [DAMER], [Primicias], [El Comercio] |
| santero, santera | Persona que practica la santería | imaginero, artesano, vendedor de artículos religiosos | [DAMER] |
| amuleto, talismán, de la suerte, contra el mal de ojo | "Llevar amuletos es también reprensible"; una medalla "no es un talismán ni debe conducir a una vana credulidad" | medalla, signo de fe, objeto de devoción | [CIC 2117], [Directorio 206] |
| mágico, hechizo, amarre, energía, esotérico | La magia y la hechicería son contrarias a la virtud de la religión. Atribuir eficacia mágica a una práctica es superstición | oración, devoción, bendición (solo si hubo una) | [CIC 2111, 2117] |
| adorar a un santo, a la Virgen o una imagen | La imagen recibe una "veneración respetuosa", no una adoración, "que sólo corresponde a Dios" | venerar, honrar, pedir la intercesión de | [CIC 2132] |
| ídolo, muñeco, figurita (por una imagen sagrada) | La idolatría es divinizar lo que no es Dios | imagen, escultura, talla | [CIC 2113, 2132] |
| limpia (como rito) | En Ecuador es el tratamiento de un curandero contra las malas energías. El verbo "Limpiar filtros" no tiene ese problema | no ofrecerla | [DAMER] |
| Santa Muerte | La Iglesia condena este culto | no incluirla como santa | [Primicias 2025] |
| infalible, garantizado, efectivo (por una novena u objeto) | Induce a la "vana credulidad" | oración, novena a | [Directorio 206] |

## Términos con condición

| Término | Condición | Fuente |
| --- | --- | --- |
| protección, protector | Vale para un ángel o un santo: cada fiel tiene "un ángel como protector y pastor". No vale para el objeto, que no protege por sí mismo. Sí: "Protectores Celestiales" como categoría. No: "medallón protector" | [CIC 336, 2111], [Directorio 206] |
| sanador | No atribuirlo a un ángel o santo como poder propio. Nombrarlo: "dedicada a san Rafael" | criterio editorial |
| "lux perpetua", "luz perpetua", descanso eterno | Es la oración por los difuntos: no va como lema ni como saludo a quien visita el sitio | [Compendio] |
| milagrosa | Solo en el nombre propio "Medalla Milagrosa" | [Directorio 206] |
| bendecido, bendito | Nunca como valor que se cobra: comprar o vender cosas espirituales es simonía. El objeto no bendice; bendice Dios por la Iglesia | [CIC 2121, 1671] |
| reliquia | Solo en sentido propio. Está prohibido venderlas. Por una pieza heredada: "recuerdo de familia" | [Canon 1190 §1], [Directorio 237] |
| sacramental | Es un signo sagrado instituido por la Iglesia y no confiere la gracia como un sacramento. No es sinónimo de "religioso". Para el catálogo: "artículos religiosos" | [CIC 1667-1670] |
| rito, ritual | Solo en sentido litúrgico. Rezar el rosario es "oración", no "ritual" | criterio editorial |
| sahumerio | Nombra una limpieza espiritual en varios países. Por el producto: "incienso" | [DAMER] |

## Regionalismos

| No usar | Motivo | Usar | Fuente |
| --- | --- | --- | --- |
| Revisá, podés, vos | En Ecuador el voseo es regional y de confianza; los sitios de consumo leídos usan tú | Revisa, puedes, tú | [Wikipedia], [Fybeca], [Pichincha] |
| remito | Ar, Ur | guía de remisión | [DAMER], [SRI] |
| vidriera | Ar, Ur y otros; no Ec | vitrina | [DAMER] |
| talle | Py, Ur | talla | [DAMER] |
| rubro (sector) | En Ec significa tipo o clase | categoría, sector | [DAMER] |
| santito (estampa) | Ch | estampa, estampita | [DAMER], [El Comercio] |
| chévere, bacán, ñaño | Coloquiales, también en Ecuador | palabra general | [DAMER] |

## Contexto local

- Montos en dólares y formato `es-EC`; RUC y cédula; provincia y cantón.
- "Parroquia" también nombra una división administrativa: aclarar cuál es cuando haya duda.
- Referentes por defecto de Ecuador, no de Argentina: Virgen de El Quinche, santa Mariana de Jesús, santa Narcisa de Jesús y santo Hermano Miguel ([ACI Prensa], [GCatholic]). Las demás advocaciones se verifican antes de usarlas.

## Sin verificar

No afirmar hasta leer la fuente:

- Que un objeto bendecido pierde la bendición o la indulgencia al venderse.
- Un pronunciamiento de la Conferencia Episcopal Ecuatoriana específico sobre santería, limpias o amuletos: no se encontró. El respaldo es el magisterio universal y el uso del término en Ecuador.
- Las acepciones del DLE de "santería" y "santero": dle.rae.es rechazó la consulta.

## Barridos

Una coincidencia se revisa en su contexto; no es un error por sí sola.

```bash
# Doctrina
git grep -nIiE 'santer(o|a|í|i)|amulet|talism|hechi(z|c)|m(a|á)gic|esot(e|é)r|energ(i|í)a|suerte|adora|(i|í)dolo|reliquia|ritual|sacramental|protector|milagro|bendec|bendit|infalible|sahumer' -- src index.html ':!**/__tests__/**'

# Voseo: verbos agudos y con pronombre (requiere git con PCRE y locale UTF-8)
LC_ALL=C.UTF-8 git grep -nIP '(*UCP)\b(?!(?i:está|esté|estás|qué|así|más|después|demás|través|sí|país|aquí|allí|ahí)\b)\w+(á|é|í|ás|és|ís)\b|(?i)\b(vos|acá|copialo|cambialo|fijate|asegurate)\b' -- src index.html ':!*.md'

# Regionalismos
git grep -nIiE '\b(remito|vidriera|talle|rubro)\b' -- src index.html ':!*.md'
```

## Fuentes

- [DAMER]: Diccionario de americanismos, ASALE. https://www.asale.org/damer/santería y la entrada de cada término.
- [CIC 336]: https://www.vatican.va/archive/catechism_sp/p1s2c1p5_sp.html
- [CIC 2111-2132]: https://www.vatican.va/archive/catechism_sp/p3s2c1a1_sp.html
- [CIC 1667-1671]: https://www.vatican.va/archive/catechism_sp/p2s2c4a1_sp.html
- [Compendio]: Compendio del Catecismo, "El eterno reposo". https://www.vatican.va/archive/compendium_ccc/documents/archive_2005_compendium-ccc_sp.html
- [Directorio]: Directorio sobre la piedad popular y la liturgia (2002). https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20020513_vers-direttorio_sp.html
- [Canon 1190]: https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro4_cann1186-1190_sp.html
- [Primicias]: https://primicias.ec/seguridad/chone-killers-practicas-esotericas-brujeria-santeria-satanismo-duran-81612
- [Primicias 2025]: nota de AFP, sin cita de un obispo ecuatoriano. https://primicias.ec/seguridad/culto-santa-muerte-duran-narcotrafico-sinaloa-mexico-choneros-ecuador-88948
- [El Comercio]: https://www.elcomercio.com/fe-mueve-economia-el-quinche-caminata/
- [Wikipedia]: https://en.wikipedia.org/wiki/Ecuadorian_Spanish
- [Fybeca]: https://www.fybeca.com/
- [Pichincha]: https://www.pichincha.com/
- [SRI]: guía de remisión, fuente secundaria y página no leída (solo el resumen del buscador); confirmar en sri.gob.ec antes de usar el término. https://www.siigo.com/ec/blog/obligaciones-fiscales/que-es-una-guia-de-remision/
- [ACI Prensa]: https://www.aciprensa.com/noticias/75645/el-vaticano-inaugura-un-mosaico-de-la-virgen-del-quinche-patrona-del-ecuador
- [GCatholic]: https://www.gcatholic.org/saints/data/country-EC.htm

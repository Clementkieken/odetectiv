## L'affaire Oclock.

16h. 
L'après midi est déjà bien avancé et je n'ai encore rien fait de la journée. Pfff.. Ce café froid a le goût d'un dimanche soir de novembre... Je prends mes clefs, mon imper imperméable et je saute dans ma 206 toute dézinguée. Direction le poste de police.

![commisariat](https://up.autotitre.com/158ae45396.jpg){.commisariat: size:100px}

 Le gars à l'accueil a sa tête des mauvais jours. Il me tend un rapport mais, évidement, tout est dans le désordre. Mon instinct de super dev m'a dit de les trier dans l'ordre de la date, histoire d'y voir plus clair.
`SELECT*FROM rapport_police ORDER BY date desc;`
Déjà 16h05 ! J'ai bien mérité une grande pause parce que franchement, j'ai déjà pas mal bossé.

(...)

17h. 
Bon, l'affaire n'a pas avancé d'un pouce pendant mon absence.
Je lis les rapports.
Hmmm...
Une certaine Beth Rave et une personne non identifiée habitant au dernier numéro de la rue Sadi Carnot semble avoir vu quelque chose. Pour moi ils sont coupables, c'est sûr !
J'affine ma recherche, apparament il y a eu d'autres délits ce jour là.
`SELECT*FROM rapport_police WHERE date='11122019';`

Tiens, je vois un autre rapport. L'adjoint au maire aurait fait une croix sur la bulle. Qu'importe ce que ça veuille dire, je n'ai jamais pu encadrer ce salopard d'adjoint.

Je dois maintenant enquêter à la fois sur Beth, l'adjoint et ce mystérieux habitant de la rue Sadi Carnot. Peut-être est-ce un coup des trois ? Hmm.. possible.

Je recherche leur témoignage : `SELECT * FROM temoignage;`. C'est d'un foutoir sans nom, la police n'a pas jugé utile de mettre le nom des témoignants, juste des ID. Il faut que je retrouve l'ID de Beth, pour commencer.
Je remarque qu'une table "personne" existe. Je m'y engage directement sans ménagement : `SELECT*FROM personne;`. La liste est gigantesque, je décide alors de faire un p'tit control F et d'affiner ma recherche en tapant "Beth". 8 résultats. Bingo ! Son ID est 416, Beth Rave, habitant au 643 rue de Groussay. Age 42 ans, 1m99 (wtf), appartenant à la promo 17 et dont l'id du projet est 27, quoique ça veuille dire à ce stade de mes recherches.

Je profite d'être là pour trouver l'habitant de la rue Sadi Carnot et ce foutu adjoint au maire.
`SELECT*FROM personne WHERE rue='rue Sadi Carnot';`
13 résultats. Heureusement qu'il n'y en a pas plus, je ne sais pas comment mettre deux conditions dans ma requête. 
Je sais qu'il habite au dernier numéro via le rapport de police.
Tiens tiens, un certain "Alex Trémité", comique de métier, 52 ans, habitant au 995 dont l'ID est 549, mesurant deux nains de 76.5cm empilés, ayant pour promo_ID 9 et projet_ID 36. Je note tout en vrac, ça servira peut-être plus tard. Je cherche des infos sur l'adjoint du maire mais en vain. Si seulement il avait rendu son nom publique...

Mes recherches sont cependant satisfaisantes. Je peux maintenant retourner dans les témoignages et chercher les ID 416 et 549.
`SELECT*FROM temoignage WHERE id=416`.
Tiens, la "p'tite" Beth n'a rien vu. La belle affaire. Je note cependant qu'elle a remarqué que le coupable faisait parti de la promo couleur Pourpre. Nouvel indice.
`SELECT * FROM temoignage WHERE id='549';`
Notre comique a vu le coupable mais il ne connait pas son nom ! Bordel, s'agirai-t-il de l'adjoint ? Je l'espère.. Je traque cet enfoiré depuis l'affaire de la Compote de Pomme. Je reprend une gorgée de mon café glacé quand mon oeil aguisé tombe sur la suite du rapport. "Je sais qu'il a travaillé sur le projet O'asis !". Ca pour de l'info, c'est de l'info...

Je referme nonchalament le dossier. Je n'ai pas trouvé de résultats bétons mais encore des indices. Encore... La soirée va être longue. Je décide d'appeler ma chère et tendre pour lui dire que je ne rentrerai pas ce soir. Elle va encore me maudire mais la justice n'attends pas. On est jeudi en plus, elle m'a sûrement fait son fameux canard aux poires confites... "Tant pis, je trouverai le coupable coûte que coûte et dînerai froid", pensais-je en avalant la dernière goutte de ce qui fût un café chaud et réconfortant.

Commençons par regarder dans la promo pourpre. Avec un peu de chance, il n'y aurait qu'une seule personne. `SELECT*FROM promo;`. Il y a pas mal de promo mais je remarque que je peux les lister par couleur. `SELECT*FROM promo WHERE couleur='pourpre;`. Je met le doigt dessus : promo Tardis, id 20.
Il faut que je plonge encore plus profondémment dans les abysses de cette affaire nauséabonde...
Je décide de checker le deuxième indice, celui d'Alex : `SELECT * FROM projet WHERE nom_projet='O\'asis';`. Nom du projet : O'Asis. Parfait. Id du projet : 15.

Je sens que je m'approche du but. Mais il faut que je récapitule mes infos.

Selon les indices, voici ce que j'ai appris du coupable :
Nom : inconnu
rue : inconnu
numero_rue : inconnu
age : inconnu
taille : inconnu
Projet : O'asis
projet_id : 15
Promo : Tardis
Couleur promo : Pourpre
promo Id : 20.

Grätterfürdöm ! comme disait mon arrière grand-père faussement allemand. Les infos sont minces mais j'avance.
J'essaye de voir si plusieurs suspect recoupent ces quelques informations : `SELECT * FROM personne WHERE projet_id='15' AND promo_id='20';`

Incroyable !!
Une seule personne répond à ces critères. Un certain Cyril Hique, id 145, habitant au 454 rue Goya, âgé de 61 ans, mesurant lui aussi deux nains empilés. Hmmm.. Deux nains empilés... Ca me dit quelque chose.. Bordel, mon vieux, fait travailler ta mémoire ! 
Je remonte de 34 lignes et bingo ! Le comique, Alex Trémité ! Lui aussi est tout petit ! Mais le reste des infos ne collent pas, c'est une dead end. Dommage, ça aurait été trop beau, mais la vie est une pute.
Ca ne fait rien, j'ai trouvé le coupable de ces effroyables photo-montage. Foutu Cyril Hique, sûrement un russe.

Je referme les dossiers, l'esprit momentanément appaisé. Je sors ma vieille bouteille de scotch qui me sert à célébrer mes victoires. Elle est pleine. Je me sers une bonne rasade quand soudain, ça me frappe comme un coup de poing dans les roubignoles.
Cyril Hique.
J'ai déjà entendu ce nom en cours.
Mais oui ! Il avait déjà fait l'objet d'une enquête en 1997 sur la revente de petits pains non homologués par la préfecture, ma deuxième affaire.

Il faut que j'aille lui parler. Mon instinct me dit quelque chose ne tourne pas tout à fait rond. Je reprend mon imper et fonce dans ma caisse branlante. Direction : 454 rue Goya.
`SELECT * FROM temoignage WHERE id=145;`
Je sonne à la porte, le coeur haletant, la main sur mon pistolet à bille.
Cyril ouvre. Son visage se décompose à ma vue.
"Je t'ai retrouvé Cyril.. Tu n'es pas seulement un lâche, mais tu es aussi un traître, comme ta petite taille le laissait deviner !"
"C'est dans OSS 177 ça, tu vas avoir des emmerdes de copyright".
Le bougre, il a raison...
"Ecoute, c'est bien moi qui ai fait les caricatures mais à la demande de quelqu'un de l'équipe. C'est un helper qui a entre 40 et 45 ans et fait entre 1m80 et 1m90." enchaîne-t-il.
" Un helper ? Qui est-il ..!"

A peine eu-je le temps de terminer ma phrase qu'une voiture tourne au coin de la rue, le moteur vombrissant comme un troupeau de gnous. Je sens qu'une catastrophe va arriver sous peu. Je remercie mentalement mon spider-sens et me jette sans réfléchir dans le fourré à côté, juste au moment où une rafale de peau de banane sont envoyés sur le malheureux. Je l'entends glisser et se fracturer la nuque sur les marches. Craque.
Je reste couché là tandis que la voiture s'éloigne au loin. Je n'ai même pas eu le temps de relever sa plaque d'immatriculation.
Putain, ils ne l'ont pas ratés.. Il faut que je retourne au poste de police.

17h27.
Le commisariat est sinistre, tout comme la scène où j'ai assisté.
Je réouvre le dossier. Une personne entre 1m80 et 1m90.. Hmm..Ca fait bien au moins deux nains et demi cette histoire.
J'affine ma recherche :
`SELECT * FROM personne WHERE taille='180 AND taille='190';`
Bordel de margoulins, aucun résultat ! 

Je me suis sûrement trompé dans ma recherche mais je note cependant que les différentes personnes de la liste ont un chiffre différent pour leur rôle. 1 et 2. Peut-être que 1 = étudiant et 2 = helper. Le russe parlait d'un helper. Il faut que j'en ai le coeur net.

Pris d'une frénésie, je fonce chercher dans le tableau des rôles
`SELECT * FROM role;`

Pas loin. Helper a bien une ID et c'est le 3.
Listons le nombre d'helper. Peut-être que comme Cyril, RIP in peace, il n'y en a qu'un.
`SELECT * FROM personne WHERE role_id='3';`

J'ai eu de la chance une fois. Pas deux. 10 helpers sont identifiés. Il faut que j'affine ma recherche pour avoir une meilleur vision de mon 2nd indice, sa taille. Vu que je ne sais pas faire de recherche avec uen condition "ENTRE tel taille et tel taille", je profite de leur petit nombre pour les listers par taille directement.
`SELECT * FROM personne WHERE role_id='3' ORDER BY taille desc;`

Deux personnes sortent de ma recherche, après avoir galéré à l'écrire :
- 561 Gédéon Groidenmabaignoire, 813 place de la Madeleine, âgé de 44 ans, 1m86 (2.41 nains), promo_id 3, projet_id 21.
- 369 Amandine Ozaur, 65 place Charles de Gaulle, âgée de 56 ans, 1m86, promo_id 15, projet_id 23.

Rien ne concorde avec Cyril cependant.

Je vais aller les voir, sait-on jamais.
Je commence par Gédéon. Au feu rouge, je parcours vite fait son dossier. Il est mention que c'est un zadiste ayant cachés quelques réfugiés Magyariens.
`SELECT * FROM temoignage WHERE id='561';`
Je sonne. Il m'ouvre.
"Bonsoir monsieur, je souhaiterai vous poser quelques ques..."
Je m'interrompt de moi-même. Son regard est fuyant et zieute les alentours. Il semble troublé et inquiet. Le grand Gédéon fini par me regarder me murmure :
"Jacques Chirac interdit les consignes à un manipulateur...". Et claque la porte tout aussi sec.
Je reste gros Jean comme devant sur le pas de sa porte. Mais quel est le fuck ?!

Troublé à mon tour, je me décide de me rendre chez la deuxième personne.
`SELECT * FROM temoignage WHERE id='369';`
Je sonne. Elle m'ouvre. 
"Bonsoir madame, je souhaiterai vous poser quelques ques..."
Je m'interrompt en croisant son regard. Elle a l'air complètement affolée.
Elle s'exclame : "Le mercredi 9 août 2079, le maître-saucier oubliera de masquer un garçon avec la muse de fabrication scandinave !"
Un ange passe.
"Mais c'est quoi ce bordel !"
Elle me regarde une dernière fois de ses yeux vitreux et ferme doucement la porte, me laissant pantois, une nouvelle fois.

Je retourne à ma bagnole cabossée en ruminant... Cette école les rends fous !
Le dossiest sur le siège du mort, entrouvert. Quelque chose m'interpelle. Oh non ! Oh non la boulette ! Je relis la description de feu Cyrile. "âgé entre 40 et 


SELECT*FROM personne WHERE rue='rue Sadi Carnot' ORDER BY numero_rue desc limit 1;
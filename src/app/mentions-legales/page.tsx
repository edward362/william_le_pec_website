"use client";

import { motion } from "framer-motion";

export default function MentionsLegales() {
    return (
        <main className="w-full bg-charcoal min-h-screen pt-32 pb-24 px-6 text-cream">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h1 className="font-serif text-4xl md:text-5xl text-gold mb-4">
                        Mentions <span className="italic text-gold-light">Légales</span>
                    </h1>
                    <div className="h-[1px] w-24 bg-gold mx-auto" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-sans text-sm md:text-base leading-relaxed space-y-8 text-cream/90 font-light"
                >
                    <section className="space-y-4">
                        <h2 className="font-sans text-lg md:text-xl text-gold uppercase tracking-widest font-medium">
                            1. Présentation du site
                        </h2>
                        <p>
                            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site <a href="http://www.williamlepec.com" className="text-gold hover:underline">www.williamlepec.com</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong className="text-cream">Propriétaire :</strong> SARL Paris Williams – SARL – 150 rue Montmartre, 75002 Paris</li>
                            <li><strong className="text-cream">Créateur :</strong> Maxime Orgeron</li>
                            <li><strong className="text-cream">Responsable publication :</strong> William le Pec – contact@williamlepec.com<br />
                                <span className="text-sm text-cream/60 italic">Le responsable publication est une personne physique ou une personne morale.</span></li>
                            <li><strong className="text-cream">Webmaster :</strong> Maxime Orgeron – maxime.orgeron@gmail.com</li>
                            <li><strong className="text-cream">Hébergeur :</strong> OVH – 5 avenue d’Orgemont, 92700 Colombes</li>
                            <li><strong className="text-cream">Crédits :</strong> les mentions légales ont été générées et offertes par Subdelirium agence web Bordeaux</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-sans text-lg md:text-xl text-gold uppercase tracking-widest font-medium mt-12">
                            2. Conditions générales d’utilisation du site et des services proposés.
                        </h2>
                        <p>
                            L’utilisation du site <a href="http://www.williamlepec.com" className="text-gold hover:underline">www.williamlepec.com</a> implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
                        </p>
                        <p>
                            Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par SARL Paris Williams, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.
                        </p>
                        <p>
                            Le site est mis à jour régulièrement par William le Pec. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-sans text-lg md:text-xl text-gold uppercase tracking-widest font-medium mt-12">
                            3. Description des services fournis.
                        </h2>
                        <p>
                            Le site a pour objet de fournir une information concernant l’ensemble des activités de la société.
                        </p>
                        <p>
                            SARL Paris Williams s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                        </p>
                        <p>
                            Toutes les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-sans text-lg md:text-xl text-gold uppercase tracking-widest font-medium mt-12">
                            4. Limitations contractuelles sur les données techniques.
                        </h2>
                        <p>
                            Le site utilise la technologie JavaScript.
                        </p>
                        <p>
                            Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-sans text-lg md:text-xl text-gold uppercase tracking-widest font-medium mt-12">
                            5. Propriété intellectuelle et contrefaçons.
                        </h2>
                        <p>
                            SARL Paris Williams est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
                        </p>
                        <p>
                            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : SARL Paris Williams.
                        </p>
                        <p>
                            Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-sans text-lg md:text-xl text-gold uppercase tracking-widest font-medium mt-12">
                            6. Limitations de responsabilité.
                        </h2>
                        <p>
                            SARL Paris Williams ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.
                        </p>
                        <p>
                            SARL Paris Williams ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site.
                        </p>
                        <p>
                            Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. SARL Paris Williams se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, SARL Paris Williams se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-sans text-lg md:text-xl text-gold uppercase tracking-widest font-medium mt-12">
                            7. Gestion des données personnelles.
                        </h2>
                        <p>
                            En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
                        </p>
                        <p>
                            A l'occasion de l'utilisation du site, peuvent êtres recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.
                        </p>
                        <p>
                            En tout état de cause SARL Paris Williams ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site l’obligation ou non de fournir ces informations.
                        </p>
                        <p>
                            Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.
                        </p>
                        <p>
                            Aucune information personnelle de l'utilisateur du site n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de SARL Paris Williams et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site.
                        </p>
                        <p>
                            Le site n'est pas déclaré à la CNIL car il ne recueille pas d'informations personnelles.
                        </p>
                        <p>
                            Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-sans text-lg md:text-xl text-gold uppercase tracking-widest font-medium mt-12">
                            8. Liens hypertextes et cookies.
                        </h2>
                        <p>
                            Le site contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de SARL Paris Williams. Cependant, SARL Paris Williams n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.
                        </p>
                        <p>
                            La navigation sur le site est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.
                        </p>
                        <p>
                            Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur pour refuser l’installation des cookies via les paramètres de son navigateur Internet.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-sans text-lg md:text-xl text-gold uppercase tracking-widest font-medium mt-12">
                            9. Droit applicable et attribution de juridiction.
                        </h2>
                        <p>
                            Tout litige en relation avec l’utilisation du site <a href="http://www.williamlepec.com" className="text-gold hover:underline">www.williamlepec.com</a> est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-sans text-lg md:text-xl text-gold uppercase tracking-widest font-medium mt-12">
                            10. Les principales lois concernées.
                        </h2>
                        <p>
                            Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.
                        </p>
                        <p>
                            Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-sans text-lg md:text-xl text-gold uppercase tracking-widest font-medium mt-12">
                            11. Lexique.
                        </h2>
                        <p>
                            <strong className="text-cream">Utilisateur :</strong> Internaute se connectant, utilisant le site susnommé.
                        </p>
                        <p>
                            <strong className="text-cream">Informations personnelles :</strong> « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
                        </p>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}

import Image from "next/image";
import { useState } from "react";
import TechStack from "../TechStack";
import styles from "../../styles/about.module.css";

export const AboutMe = () => {

    return (
        <section className="section-home about-section" id="about">
            <div className={styles.aboutContainer}>
                {/* Número de sección con estilo moderno */}
                <div className={styles.sectionNumberContainer}>
                    <span className={styles.sectionNumber}>01.</span>
                    <h2 className="title-2">Sobre mí</h2>
                    <div className={styles.sectionLine}></div>
                </div>

                <div className={styles.aboutContentGrid}>
                    {/* Contenido de texto */}
                    <div className={styles.aboutTextContent}>
                        {/* Badge interactivo */}
                        <div className={styles.statusBadge}>
                            <span className={styles.statusDot}></span>
                            <span>Disponible para proyectos Full Stack</span>
                        </div>

                        <div className={styles.aboutStory}>
                            <p className={styles.storyText}>
                                Hola! Déjame te cuento mi historia: mi interés en el mundo del
                                desarrollo empezó allá por el{" "}
                                <span className={styles.highlightText}>2020</span> cuando
                                me involucré en el uso de herramientas web y control ciudadano.
                            </p>

                            <p className={styles.storyText}>
                                En este poco tiempo he descubierto todas las ventajas y oportunidades
                                que suponen la{" "}
                                <span className={styles.highlightText}>
                                    fusión de la tecnología y el derecho
                                </span>{" "}
                                y estoy realmente entusiasmado de poder colaborar en la creación y
                                distribución de dichas soluciones digitales.
                            </p>

                            <p className={styles.storyText}>
                                Como <span className={styles.highlightText}>desarrollador Full Stack</span>, trabajo
                                tanto en el frontend con React y Next.js, como en el backend con Python,
                                Flask y Django. Actualmente sigo estudiando para convertirme en un experto en
                                desarrollo web, datos personales y ciberseguridad.
                            </p>
                        </div>
                    </div>

                    {/* Imagen con efectos mejorados */}
                    <div className={styles.aboutImageWrapper}>
                        <div className={styles.imageDecorations}>
                            <div className={`${styles.decorationCircle} ${styles.decoration1}`}></div>
                            <div className={`${styles.decorationCircle} ${styles.decoration2}`}></div>
                            <div className={`${styles.decorationCircle} ${styles.decoration3}`}></div>
                        </div>


                        <div className={styles.imageFrame}>
                            <Image
                                src="/fotoPerfil.jpeg"
                                alt="Edwin Cacuango profile picture"
                                width={450}
                                height={353}
                            />
                        </div>


                        {/* Stats decorativos actualizados */}
                        <div className={styles.statsFloating}>
                            <div className={`${styles.statCard} ${styles.statCard1}`}>
                                <div className={styles.statNumber}>2+</div>
                                <div className={styles.statLabel}>Años de experiencia</div>
                            </div>
                            <div className={`${styles.statCard} ${styles.statCard2}`}>
                                <div className={styles.statNumber}>5+</div>
                                <div className={styles.statLabel}>Proyectos completados</div>
                            </div>
                        </div>
                    </div>

                    <TechStack />
                </div>
            </div>
        </section>
    );
};
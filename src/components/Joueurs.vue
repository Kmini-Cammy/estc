<template>
    <Card>
        <template #title>Joueurs</template>
        <template #content>
            <Accordion value=null>
                <AccordionPanel value="0">
                    <AccordionHeader>Les joueurs</AccordionHeader>
                    <AccordionContent>
                        <small>powered by <a target="_blank"
                                href="https://www.pingpocket.fr/">www.pingpocket.fr</a></small>
                        <iframe frameborder="1" name="pingpocket" width="100%" height="800" scrolling="auto"
                            src="https://www.pingpocket.fr/app/fftt/clubs/06880145/licencies?SORT=OFFICIAL_RANK">
                            <p>iframe non supportée</p>
                        </iframe>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="1">
                    <AccordionHeader>Les progressions mensuelles</AccordionHeader>
                    <AccordionContent>
                        <small>powered by <a target="_blank"
                                href="https://www.pingpocket.fr/">www.pingpocket.fr</a></small>
                        <iframe frameborder="1" name="pingpocket" width="100%" height="800" scrolling="auto"
                            src="https://www.pingpocket.fr/app/fftt/clubs/06880145/licencies?SORT=MONTHLY_INCREASE">
                            <p>iframe non supportée</p>
                        </iframe>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="2">
                    <AccordionHeader>Les progressions annuelles</AccordionHeader>
                    <AccordionContent>
                        <small>powered by <a target="_blank"
                                href="https://www.pingpocket.fr/">www.pingpocket.fr</a></small>
                        <iframe frameborder="1" name="pingpocket" width="100%" height="800" scrolling="auto"
                            src="https://www.pingpocket.fr/app/fftt/clubs/06880145/licencies?SORT=SEASON_INCREASE">
                            <p>iframe non supportée</p>
                        </iframe>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </template>
    </Card>
</template>

<script setup>
</script>

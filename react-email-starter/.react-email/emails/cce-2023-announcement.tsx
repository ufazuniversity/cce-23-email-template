import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import { Heading } from '@react-email/heading';
import { Column } from '@react-email/column';
import { Hr } from '@react-email/hr';
import * as React from 'react';


export default function email(){
    return (
        <Html>
            <Head/>
            <Preview>CCE-2023 announcement</Preview>
            <Section style={main}>
                <Container style={container}>
                    <Section style={header}>
                        <Img src="partners.png" alt="partners" style={header.image}></Img>
                    </Section>
                    <Section style={hero}>
                        <Img stc="hero.jpg" alt="hero"></Img>
                        <Heading as="h1" style={hero.title}>Complex Computational Ecosystems '23</Heading>
                        <Heading as="h2" style={hero.subtitle}>25-27 April<br/>Baku, Azerbaijan</Heading>
                        <Container style={hero.infoTable}>
                            <Section>
                                <Column>
                                    <Heading as="h4">Location</Heading>
                                    <Text>French-Azerbaijani University</Text>
                                </Column>
                                <Column>
                                    <Heading as="h4">Date</Heading>
                                    <Text>April 25-27, 2023</Text>
                                </Column>
                                <Column>
                                    <Heading as="h4">Speakers</Heading>
                                    <Text>20+ Speakers</Text>
                                </Column>
                                <Column>
                                    <Heading as="h4">Participants</Heading>
                                    <Text>200+</Text>
                                </Column>
                            </Section>
                        </Container>
                    </Section>
                    <Section style={summary}>
                        <Column style={summary.left}>
                            <Heading as="h3">How to Join</Heading>
                            <Text>https://cce-2023.ufaz.az/registration/</Text>
                            <Hr/>
                            <Heading as="h3">About the Conference</Heading>
                            <Text>CCE'23 Baku is devoted to all scientists involved in transdisciplinary challenges crossing theoretical questions with empirical observations of multi-level and multi-modal computational ecosystems.</Text>
                        </Column>
                        <Column style={summary.right}>
                            <Img src="chairs.jpg" alt="chairs"/>
                            <Container>
                                <Heading as="h3">Benefits of Attending the Conference</Heading>
                                <Section>
                                    <Column><Text>All submissions accepted by the Programme Committee will be internationally published by Springer in the Lecture Notes in Computer Science series.</Text></Column>
                                    <Column><Text>Selected papers will be published in the Springer Lecture Notes in Computer Science series.</Text></Column>
                                </Section>
                            </Container>
                        </Column>
                    </Section>
                    <Section style={importantDates}>
                        <Column>Abstract & keywords submission: February 5 2023</Column>
                        <Column>Paper / poster submission deadline: February 12 2023</Column>
                        <Column>Notification of acceptance: March 12 2023</Column>
                        <Column>Final version for publication: June 4 2023</Column>
                    </Section>
                    <Hr />
                    <Section>
                        <Heading as="h3">CCE '23 BAKU</Heading>
                        <Text>After the UFAZ-ASOIU-UNISTRA first scientific conference that took place in November 2021, CCE’23 is the first of a future series of triennial international conferences taking place in Baku, Azerbaijan, coorganized by UFAZ Franco-Azerbaijani University, ASOIU Azerbaijan State Oil and Industry University, UNISTRA University of Strasbourg and the Complex Computational Ecosystem e-laboratory of the Complex Systems Digital Campus (CS-DC) UNESCO UniTwin.</Text> 
                        <Text>It is devoted to all scientists involved in transdisciplinary challenges crossing theoretical questions with empirical observations of multi-level and multi-modal computational ecosystems</Text>
                        <Text>CCE’23 will be held in Baku, the capital of Azerbaijan, in the Caucasus, on a combined online / offline basis, as is now common in post-COVID events. It will take place on April 25-27th, just before the Formula One Baku Grand Prix (April 28-30th). There will be no conference fees for online speakers or attendees. Conference fees will only apply to in-person attendees, to pay for coffee breaks, lunches and social events. Paper selection will use an innovative collaborative author / reviewer procedure that was successfully inaugurated by the CS-DC 15 UNESCO world conference.</Text>
                        <Text>All subscribed and connected scientists in the world can attend and ask questions to either online or presentations in Baku thanks to combined online / offline moderation by session chairs in Baku along the published schedule.</Text>
                        <Text>All selected presentations will be given in front of the world via open videoconference tools. All subscribed and connected scientists in the world can attend and ask questions thanks to online moderation by session chairs along the published schedule.</Text>
                        <Text>Selected papers will be published in the Springer Lecture Notes in Computer Science series.  Presence in Baku is encouraged to better promote your work in front of a live audience and other researchers, thanks to moderate conference fees (400€/4 days, cf. registration pages) and easy hotel prices (typically &lt;50€/night for comfortable hotels, breakfast included).</Text>
                        <Text>All submissions accepted by the Programme Committee will be internationally published by Springer in the Lecture Notes in Computer Science series</Text>
                    </Section>
                </Container> 
            </Section>
        </Html>
    )
}

const main = {
    backgroundColor: "#fff"
}

const container = {
    margin: "0 auto"
}

const header = {
    image: {}
}

const hero = {
    title: {},
    subtitle: {},
    infoTable: {}
}

const summary = {
    left: {},
    right: {}
}

const importantDates = {}
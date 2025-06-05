import {
  Heading,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";

export const TermsOfEvents = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    //These Rules and Regulation were generated with Gemini, they were not thought-up themself. The code, however was built by Lin Fungula.

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> Before we start! </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            By closing this message and/or continuing, you aknowledge and accept
            these terms and rules. We advise you read them.
          </Text>
          <Heading>General Guidelines:</Heading>
          <Text>
            <OrderedList>
              <ListItem>
                <b>Be Accurate and Truthful:</b> All event details (date, time,
                location, description, ticket prices, etc.) must be accurate and
                reflect the actual event. Misleading information is not allowed.
              </ListItem>
              <ListItem>
                <b>Provide Sufficient Detail:</b> Include enough information for
                potential attendees to understand what the event is about, what
                to expect, and if it&apos;s relevant to them.
              </ListItem>
              <ListItem>
                <b>Respect Intellectual Property: </b>Do not use copyrighted
                material (images, logos, text) without proper authorization.
              </ListItem>
              <ListItem>
                <b>Stay Relevant:</b> Ensure your event posting is relevant to
                the platform&apos;s intended audience and categories.
              </ListItem>
              <ListItem>
                <b>One Event Per Listing:</b> Each listing should represent a
                single, distinct event. Do not bundle multiple unrelated events
                into one posting.
              </ListItem>
              <ListItem>
                <b>Keep it Current:</b> If event details change (date, time,
                cancellation, etc.), update your listing promptly. Mark canceled
                events clearly.
              </ListItem>
              <ListItem>
                <b>Be Respectful and Professional:</b>Use appropriate language
                and avoid offensive, discriminatory, or inappropriate content.
              </ListItem>
            </OrderedList>
          </Text>
          <Heading>Specific Information Requirements:</Heading>
          <Text>
            <OrderedList>
              <ListItem>
                Clear Event Title: Use a concise and descriptive title that
                accurately reflects the event.
              </ListItem>
              <ListItem>
                Precise Date and Time: Clearly state the start and end dates and
                times, including the correct time zone.
              </ListItem>
              <ListItem>
                Accurate Location: Provide the full and correct physical address
                or online platform link for the event. For physical events,
                consider including venue details or directions if helpful.
              </ListItem>
              <ListItem>
                Detailed Description: Write a clear and engaging description of
                the event, including what attendees can expect, key activities,
                speakers (if applicable), and any prerequisites.
              </ListItem>
              <ListItem>
                categorization: Select the most appropriate category(ies) for
                your event to ensure it reaches the right audience.
              </ListItem>
              <ListItem>
                Relevant Tags: Use relevant keywords or tags to help users find
                your event through search.
              </ListItem>
              <ListItem>
                High-Quality Visuals: Include clear and appealing images or
                videos that represent your event. Ensure they are appropriately
                sized and formatted.
              </ListItem>
              <ListItem>
                Ticket Information (if applicable): Clearly state ticket prices,
                availability, and any purchasing instructions or links. Specify
                if tickets are required, recommended, or free.
              </ListItem>
              <ListItem>
                Contact Information (Optional but Recommended): Provide a
                contact email or website for attendees with questions.
              </ListItem>
              <ListItem>
                Age Restrictions (if applicable): Clearly state any age
                restrictions or recommendations for the event.
              </ListItem>
              <ListItem>
                Accessibility Information (if applicable): Provide details about
                the venue&apos;s accessibility features for people with
                disabilities.
              </ListItem>
            </OrderedList>
          </Text>
          <Heading>Prohibited Content and Activities:</Heading>
          <Text>
            <OrderedList>
              <ListItem>
                Illegal Activities: Do not promote or facilitate any illegal
                activities.
              </ListItem>
              <ListItem>
                Hate Speech and Discrimination: Content that promotes hatred,
                discrimination, or violence against individuals or groups based
                on their race, ethnicity, religion, gender, sexual orientation,
                disability, or other protected characteristics is strictly
                prohibited.
              </ListItem>
              <ListItem>
                Spam and Excessive Promotion: Avoid excessive self-promotion or
                posting irrelevant content.
              </ListItem>
              <ListItem>
                Misleading or Deceptive Practices: Do not engage in any
                practices that could mislead or deceive potential attendees.
              </ListItem>
              <ListItem>
                Personal Information: Do not share sensitive personal
                information (yours or others&apos;) in the event listing.
              </ListItem>
            </OrderedList>
          </Text>
          <Heading>Platform Specific Guidelines:</Heading>
          <Text>
            <OrderedList>
              <ListItem>
                Adhere to Platform Terms of Service: All event postings must
                comply with the platform&apos;s overall terms of service and
                community guidelines.
              </ListItem>
              <ListItem>
                Follow Platform Formatting Guidelines: Adhere to any specific
                formatting requirements or guidelines provided by the platform.
              </ListItem>
            </OrderedList>
          </Text>

          <Text>
            These rules aim to create a trustworthy and informative environment
            for both event organizers and attendees on the online platform. Let
            me know if you&apos;d like any specific aspects elaborated on!
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

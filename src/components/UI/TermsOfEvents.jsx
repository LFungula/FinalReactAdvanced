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
            <ol>
              <li>
                <b>Be Accurate and Truthful:</b> All event details (date, time,
                location, description, ticket prices, etc.) must be accurate and
                reflect the actual event. Misleading information is not allowed.
              </li>
              <li>
                <b>Provide Sufficient Detail:</b> Include enough information for
                potential attendees to understand what the event is about, what
                to expect, and if it's relevant to them.
              </li>
              <li>
                <b>Respect Intellectual Property: </b>Do not use copyrighted
                material (images, logos, text) without proper authorization.
              </li>
              <li>
                <b>Stay Relevant:</b> Ensure your event posting is relevant to
                the platform's intended audience and categories.
              </li>
              <li>
                <b>One Event Per Listing:</b> Each listing should represent a
                single, distinct event. Do not bundle multiple unrelated events
                into one posting.
              </li>
              <li>
                <b>Keep it Current:</b> If event details change (date, time,
                cancellation, etc.), update your listing promptly. Mark canceled
                events clearly.
              </li>
              <li>
                <b>Be Respectful and Professional:</b>Use appropriate language
                and avoid offensive, discriminatory, or inappropriate content.
              </li>
            </ol>
          </Text>
          <Heading>Specific Information Requirements:</Heading>
          <Text>
            <ol>
              <li>
                Clear Event Title: Use a concise and descriptive title that
                accurately reflects the event.
              </li>
              <li>
                Precise Date and Time: Clearly state the start and end dates and
                times, including the correct time zone.
              </li>
              <li>
                Accurate Location: Provide the full and correct physical address
                or online platform link for the event. For physical events,
                consider including venue details or directions if helpful.
              </li>
              <li>
                Detailed Description: Write a clear and engaging description of
                the event, including what attendees can expect, key activities,
                speakers (if applicable), and any prerequisites.
              </li>
              <li>
                categorization: Select the most appropriate category(ies) for
                your event to ensure it reaches the right audience.
              </li>
              <li>
                Relevant Tags: Use relevant keywords or tags to help users find
                your event through search.
              </li>
              <li>
                High-Quality Visuals: Include clear and appealing images or
                videos that represent your event. Ensure they are appropriately
                sized and formatted.
              </li>
              <li>
                Ticket Information (if applicable): Clearly state ticket prices,
                availability, and any purchasing instructions or links. Specify
                if tickets are required, recommended, or free.
              </li>
              <li>
                Contact Information (Optional but Recommended): Provide a
                contact email or website for attendees with questions.
              </li>
              <li>
                Age Restrictions (if applicable): Clearly state any age
                restrictions or recommendations for the event.
              </li>
              <li>
                Accessibility Information (if applicable): Provide details about
                the venue's accessibility features for people with disabilities.
              </li>
            </ol>
          </Text>
          <Heading>Prohibited Content and Activities:</Heading>
          <Text>
            <ol>
              <li>
                Illegal Activities: Do not promote or facilitate any illegal
                activities.
              </li>
              <li>
                Hate Speech and Discrimination: Content that promotes hatred,
                discrimination, or violence against individuals or groups based
                on their race, ethnicity, religion, gender, sexual orientation,
                disability, or other protected characteristics is strictly
                prohibited.
              </li>
              <li>
                Spam and Excessive Promotion: Avoid excessive self-promotion or
                posting irrelevant content.
              </li>
              <li>
                Misleading or Deceptive Practices: Do not engage in any
                practices that could mislead or deceive potential attendees.
              </li>
              <li>
                Personal Information: Do not share sensitive personal
                information (yours or others') in the event listing.
              </li>
            </ol>
          </Text>
          <Heading>Platform Specific Guidelines:</Heading>
          <Text>
            <ol>
              <li>
                Adhere to Platform Terms of Service: All event postings must
                comply with the platform's overall terms of service and
                community guidelines.
              </li>
              <li>
                Follow Platform Formatting Guidelines: Adhere to any specific
                formatting requirements or guidelines provided by the platform.
              </li>
            </ol>
          </Text>

          <Text>
            These rules aim to create a trustworthy and informative environment
            for both event organizers and attendees on the online platform. Let
            me know if you'd like any specific aspects elaborated on!
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

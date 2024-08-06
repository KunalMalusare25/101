import React from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';

const KarjadaarInfo = () => {
  return (
    <Box p={6} borderWidth="1px" borderRadius="lg" bg="white">
      <form>
        <VStack spacing={6} align="stretch">
          {/* Section 1 */}
          <Heading size="md">कर्ज माहिती</Heading>
          <FormControl>
            <FormLabel>कर्ज प्रकार</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>दायित्वास ठेवे घेणे बाकी रकमेसचा दिनांक</FormLabel>
            <Input type="date" />
          </FormControl>
          <FormControl>
            <FormLabel>कर्ज अर्ज दाखल केल्याचा दिनांक</FormLabel>
            <Input type="date" />
          </FormControl>
          <FormControl>
            <FormLabel>कर्ज अर्ज मंजुरी संचालक मंडळाचा सभेचा दिनांक</FormLabel>
            <Input type="date" />
          </FormControl>
          <FormControl>
            <FormLabel>कर्ज अर्ज मंजुरी ठराव क्रमांक</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>कर्ज विस्तार केल्याचा दिनांक</FormLabel>
            <Input type="date" />
          </FormControl>
          <FormControl>
            <FormLabel>कर्ज मुदत</FormLabel>
            <Input type="number" />
          </FormControl>
          <FormControl>
            <FormLabel>कर्जाची अंतिम मुदत</FormLabel>
            <Input type="date" />
          </FormControl>
          
          <Divider />

          {/* Section 2: आकारणी */}
          <Heading size="md">आकारणी</Heading>
          <FormControl>
            <FormLabel>कर्जाचा व्याजदर</FormLabel>
            <Input type="number" />
          </FormControl>
          <FormControl>
            <FormLabel>कर्जाचे दंडव्याज</FormLabel>
            <Input type="number" />
          </FormControl>
          <FormControl>
            <FormLabel>पूर्वव्याजदर</FormLabel>
            <Input type="number" />
          </FormControl>
          <FormControl>
            <FormLabel>कर्जाचा खाती क्रमांक</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>कर्जाची खाता</FormLabel>
            <Input type="number" />
          </FormControl>
          <FormControl>
            <FormLabel>
              कर्जाच्या अंतिम मुदतीपूर्वी दायित्वास ठेवे घेणे बाकी रकमेसचा
              दिनांकपर्यंतची पूर्ण रक्कम
            </FormLabel>
            <Input type="number" />
          </FormControl>

          <Divider />

          {/* Section 3 */}
          <FormControl>
            <FormLabel>संचालक मंडळाच्या सभेचे १०२ कारवाई मंजुरीचा दिनांक</FormLabel>
            <Input type="date" />
          </FormControl>
          <FormControl>
            <FormLabel>संचालक मंडळाच्या सभेचे १०२ कारवाई मंजुरी ठराव क्रमांक</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>कर्ज बगळिकरणाची बिसलेला रजिस्टर्ड नोटीसचा दिनांक</FormLabel>
            <Input type="date" />
          </FormControl>

          <Divider />

          {/* Section 4 */}
          <FormControl>
            <FormLabel>कर्ज मंजूर रक्कम</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>दिनांक 31/03/2024 पर्यंत आकारलेले पूर्ण व्याज</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>आकारलेले दंड व्याज (दंडव्याज)</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>कर्ज मंजूर रक्कम अवधारित</FormLabel>
            <Input type="text" />
          </FormControl>

          <Divider />

          {/* Section 5 */}
          <FormControl>
            <FormLabel>दिनांक 31/03/2024 पर्यंत मूळत: झळोली वसूली</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>दिनांक 31/03/2024 पर्यंत व्याजात झळोली वसूली</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>दिनांक 31/03/2024 पर्यंत दंड व्याजात झळोली वसूली</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>

          <Divider />

          {/* Section 6 */}
          <FormControl>
            <FormLabel>(अ) दिनांक 31/03/2024 पर्यंत मूळराशी येणे बाकी</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>(ब) दिनांक 31/03/2024 पर्यंत व्याजाची येणे बाकी</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>(क) दिनांक 31/03/2024 पर्यंत दंड व्याजाची येणे बाकी</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>

          <Divider />

          {/* Section 7 */}
          <FormControl>
            <FormLabel>विमा रक्कम (असेटच्या)</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>दिनांक 31/03/2024 पर्यंत एकूण नोटीस, पोस्टेज इ. खर्च</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>दिनांक 31/03/2024 पर्यंत रिसल्व केलेला खर्च</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>(अ + ब + क + ड = ह) एकूण वसूली झळोली वसूली</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>

          <Divider />

          {/* Section 8 */}
          <FormControl>
            <FormLabel>अर्जदारास झालेला खर्च</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>अर्जाला लावलेल्या स्टँप</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>कोर्ट फी स्टँप रक्कम</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>एखुण झालेली स्टँपची रक्कम</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>चौकशी फी व खर्च</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>इतर खर्च पोस्टेज इत्यादी</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>एखुण खर्च</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>

          <Divider />

          {/* Section 9 */}
          <FormControl>
            <FormLabel>जामीनदारांनी धारणाचा खर्च</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>कारवाईची फी</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>अन्‍य खर्च</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>एखुण खर्च</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>
          <FormControl>
            <FormLabel>अर्जाची रक्कम</FormLabel>
            <Input type="number" placeholder="₹" />
          </FormControl>

          <Divider />

          {/* Section 10: तारणाची माहिती */}
          <Heading size="md">तारणाची माहिती</Heading>
          <FormControl>
            <FormLabel>पगारीची माहिती</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>जंगम मालमत्तेचे वर्णन</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>स्थावर मालमत्तेचे वर्णन</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>इतर मालमत्तेचे वर्णन</FormLabel>
            <Input type="text" />
          </FormControl>

          {/* Submit Button */}
          <Button colorScheme="teal" type="submit">
            सबमिट करा
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default KarjadaarInfo;

import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGirdFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage 

const Property = ({ property: { coverPhoto, price, title, rentFrequency, rooms, baths, agency, isVerified, externalId } }) => (

    <Link href={`/property/${externalId}`} passHref>
        <Flex flexWrap="wrap" w="420px" p="6" justifyContent="flex-start" cursor="pointer"></Flex>
        <Box>
            <Image src={coverPhoto ? coverPhoto.url : defaultImage} />
        </Box>

    </Link>
);

export default Property;
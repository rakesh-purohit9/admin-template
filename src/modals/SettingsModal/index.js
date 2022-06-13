import React from "react";
import ModalProvider from "react-modal";

import { Column } from "components/Column";
import { List } from "components/List";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";

const SettingsModalModal = (props) => {
  return (
    <>
      <ModalProvider
        className="m-[auto] w-[47%]"
        overlayClassName="bg-bluegray_100 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 w-[100%]">
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              <Row className="items-start justify-between lg:my-[17px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29.1600075px] w-[100%]">
                <Image
                  src={"images/img_icon_15.svg"}
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.32px] lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] mb-[18.75px] object-contain w-[9%]"
                  alt="icon"
                />
                <Column className="items-start justify-start w-[86%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Account`}</Text>
                  <Text className="font-normal mb-[0] 2xl:mt-[3px] xl:mt-[3px] lg:mt-[3px] 3xl:mt-[4px] mt-[5.21px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                </Column>
              </Row>
              <Row className="items-start justify-between lg:my-[17px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29.1600075px] w-[100%]">
                <Image
                  src={"images/img_icon_16.svg"}
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.32px] lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] mb-[18.75px] object-contain w-[9%]"
                  alt="icon"
                />
                <Column className="items-start justify-start w-[86%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Notification`}</Text>
                  <Text className="font-normal mb-[1px] 2xl:mt-[3px] xl:mt-[3px] lg:mt-[3px] 3xl:mt-[4px] mt-[5.2px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                </Column>
              </Row>
              <Row className="items-start justify-between lg:my-[17px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29.1600075px] w-[100%]">
                <Image
                  src={"images/img_icon_17.svg"}
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.32px] lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] mb-[18.75px] object-contain w-[9%]"
                  alt="icon"
                />
                <Column className="items-start justify-start w-[86%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Security`}</Text>
                  <Text className="font-normal 2xl:mt-[3px] xl:mt-[3px] lg:mt-[3px] 3xl:mt-[4px] mt-[5.21px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                </Column>
              </Row>
              <Row className="items-start justify-between lg:my-[17px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29.1600075px] w-[100%]">
                <Image
                  src={"images/img_icon_18.svg"}
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.32px] lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] mb-[18.75px] object-contain w-[9%]"
                  alt="icon"
                />
                <Column className="items-start justify-start w-[86%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Payment`}</Text>
                  <Text className="font-normal mb-[1px] 2xl:mt-[3px] xl:mt-[3px] lg:mt-[3px] 3xl:mt-[4px] mt-[5.2px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                </Column>
              </Row>
              <Row className="items-start justify-between lg:my-[17px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29.1600075px] w-[100%]">
                <Image
                  src={"images/img_icon_19.svg"}
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.32px] lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] mb-[18.75px] object-contain w-[9%]"
                  alt="icon"
                />
                <Column className="items-start justify-start w-[86%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Help`}</Text>
                  <Text className="font-normal 2xl:mt-[3px] xl:mt-[3px] lg:mt-[3px] 3xl:mt-[4px] mt-[5.21px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                </Column>
              </Row>
              <Row className="items-start justify-between lg:my-[17px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29.1600075px] w-[100%]">
                <Image
                  src={"images/img_icon_20.svg"}
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.32px] lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] mb-[18.75px] object-contain w-[9%]"
                  alt="icon"
                />
                <Column className="items-start justify-start w-[86%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Privacy Policy`}</Text>
                  <Text className="font-normal 2xl:mt-[3px] xl:mt-[3px] lg:mt-[3px] 3xl:mt-[4px] mt-[5.21px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                </Column>
              </Row>
            </List>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default SettingsModalModal;

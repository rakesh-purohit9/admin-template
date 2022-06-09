import React from "react";

import { useNavigate } from "react-router-dom";
import {
  VictoryAreaData,
  ChartJsComposedData,
  NivoLinData,
  VictoryLineData,
} from "./chartData.js";
import {
  VictoryArea,
  VictoryChart,
  VictoryStack,
  VictoryTheme,
  VictoryLine,
} from "victory";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart as ChartComposed } from "react-chartjs-2";
import { ResponsiveLine } from "@nivo/line";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { List } from "components/List";
import { Line } from "components/Line";
import { SelectBox } from "components/SelectBox";
import { CheckBox } from "components/CheckBox";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

const DashboardRestaurantPage = () => {
  const navigate = useNavigate();

  const handleNavigate29 = () => navigate("/menu");
  const handleNavigate20 = () => navigate("/ordersrestaurant");
  const handleNavigate21 = () => navigate("/customerreviews");
  const handleNavigate22 = () => navigate("/settingsrestaurant");
  const handleNavigate23 = () => navigate("/");

  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-poppins mx-[auto] w-[100%]">
        <Row className="items-center justify-start w-[100%]">
          <aside className="bg-white_A700 items-center w-[18%]">
            <Column className="">
              <Column className="items-center justify-start lg:mb-[365px] xl:mb-[418px] 2xl:mb-[470px] 3xl:mb-[564px] mb-[627px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] w-[73%]">
                <Text className="font-bold mx-[auto] text-bluegray_900 lg:text-fs23 xl:text-fs26 2xl:text-fs30 3xl:text-fs36 text-fs40 text-left">
                  <span className="text-bluegray_900 font-poppins">
                    <>{`GoMeal`}</>
                  </span>
                  <span className="text-amber_600 font-poppins">
                    <>{`.`}</>
                  </span>
                </Text>
                <Row className="bg-amber_600 items-center justify-start lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] mt-[62px] rounded-radius16 shadow-bs w-[100%]">
                  <Image
                    src="img_restaurantloca_8.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="RestaurantLoca"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Dashboard`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate29}
                >
                  <Image
                    src="img_bill_8.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Bill"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Menu`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate20}
                >
                  <Image
                    src="img_deliveryscoote_8.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="DeliveryScoote"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Food Order`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate21}
                >
                  <Image
                    src="img_review_8.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Review"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Reviews`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate22}
                >
                  <Image
                    src="img_setting_8.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Setting"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Setting`}</Text>
                </Row>
                <Stack className="lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] lg:mt-[135px] xl:mt-[154px] 2xl:mt-[174px] 3xl:mt-[208px] mt-[232px] w-[100%]">
                  <div className="absolute bg-gradient  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-y-[0] left-[20%] right-[19%] rounded-radius32 shadow-bs1 w-[61%]"></div>
                  <Stack className="absolute bg-gradient1  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] rounded-radius16 w-[100%]">
                    <Image
                      src="img_maskgroup_29.png"
                      className="common-pointer absolute lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] object-cover w-[100%]"
                      onClick={handleNavigate23}
                      alt="MaskGroup"
                    />
                    <Column className="absolute items-start justify-start right-[6%] top-[11%] w-[82%]">
                      <Column className="w-[100%]">
                        <Stack className="lg:h-[54px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] h-[91px] w-[100%]">
                          <Image
                            src="img_vector_11.svg"
                            className="absolute lg:h-[17px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] h-[29px] object-contain right-[0] top-[0] w-[11%]"
                            alt="Vector"
                          />
                          <Text className="absolute bottom-[0] font-bold leading-lh left-[0] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[95%]">
                            {
                              <>
                                {`Upgrade your`}
                                <br />
                                {`Account to get more benefits`}
                              </>
                            }
                          </Text>
                        </Stack>
                      </Column>
                      <Button className="bg-white_A700 font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] py-[10.705px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius8 text-bluegray_900 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 w-[52%]">{`Upgrade`}</Button>
                    </Column>
                  </Stack>
                </Stack>
              </Column>
            </Column>
          </aside>
          <Column className="lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[78%]">
            <Row className="items-start justify-start w-[100%]">
              <Text className="font-bold lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] text-bluegray_900 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left">{`Dashboard`}</Text>
              <div className="2xl:ml-[335px] 3xl:ml-[402px] bg-transparent border-0 lg:ml-[260px] ml-[447px] w-[34%] xl:ml-[298px] input-wrap">
                <Image
                  src="img_xmlid_223_5.svg"
                  className="absolute h-[24px] left-[28px] bg-transparent border-0 lg:h-[14px] lg:left-[16px] xl:h-[17px] xl:left-[18px] 2xl:h-[19px] 2xl:left-[21px] 3xl:h-[22px] 3xl:left-[25px] my-[auto] inset-y-[0]"
                  alt="XMLID 223"
                />
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border-0 font-normal not-italic lg:pl-[46px] xl:pl-[53px] 2xl:pl-[60px] 3xl:pl-[72px] pl-[80px] lg:py-[11px] xl:py-[13px] 2xl:py-[14px] 3xl:py-[17px] py-[19.545px] rounded-radius16 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  name="Group151"
                  placeholder={`Search`}
                ></Input>
              </div>
              <Image
                src="img_menu_8.svg"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] object-contain w-[19%]"
                alt="menu"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Column className="xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] w-[69%]">
                <Row className="bg-white_A700 items-center justify-end rounded-radius16 w-[100%]">
                  <Column className="items-start xl:mb-[26px] mb-[40px] xl:mt-[27px] mt-[41px] lg:my-[23px] 2xl:my-[30px] 3xl:my-[36px] w-[19%]">
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Total Income`}</Text>
                    <Text className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] text-bluegray_900 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left">{`$12,890,00`}</Text>
                  </Column>
                  <List
                    className="lg:gap-[21px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[33px] gap-[37.50px] grid grid-cols-[repeat(1,_1fr_1px)_1fr] min-h-[auto] lg:ml-[110px] xl:ml-[126px] 2xl:ml-[142px] 3xl:ml-[171px] ml-[190px] lg:my-[19px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] my-[34px] w-[30%]"
                    orientation="horizontal"
                  >
                    <Column className="items-start justify-start w-[100%]">
                      <Text className="font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Income`}</Text>
                      <Text className="font-bold font-inter xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`$4345,00`}</Text>
                      <Row className="font-cairo items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[54%]">
                        <Image
                          src="img_arrow.svg"
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          alt="arrow"
                        />
                        <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left text-light_green_500">{`+15%`}</Text>
                      </Row>
                    </Column>
                    <Line className="self-center w-[1px] h-[95px] bg-gray_300 rotate-[90deg] lg:h-[56px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px]" />
                    <Column className="items-start justify-start w-[100%]">
                      <Text className="font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Expense`}</Text>
                      <Text className="font-bold font-inter xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`$2890,00`}</Text>
                      <Row className="font-cairo items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[53%]">
                        <Image
                          src="img_arrow_1.svg"
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          alt="arrow"
                        />
                        <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left text-red_400">{`-10%`}</Text>
                      </Row>
                    </Column>
                  </List>
                  <Button className="bg-amber_600 font-medium lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] ml-[57.5px] lg:my-[15px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] my-[26.5px] rounded-bl-[16px] rounded-br-[0] rounded-tl-[16px] rounded-tr-[0] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[24%]">{`Withdraw`}</Button>
                </Row>
                <Row className="font-inter items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Column className="bg-white_A700 items-center lg:py-[21px] xl:py-[24px] 2xl:py-[27px] 3xl:py-[33px] py-[37px] rounded-radius16 w-[53%]">
                    <Image
                      src="img_chart.svg"
                      className="h-[105px] lg:h-[62px] xl:h-[71px] 2xl:h-[79px] 3xl:h-[95px] mx-[auto] object-contain w-[73%]"
                      alt="chart"
                    />
                    <Row className="lg:gap-[184px] xl:gap-[210px] 2xl:gap-[237px] 3xl:gap-[284px] gap-[316.24px] grid grid-cols-2 items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] pr-[1px] w-[73%]">
                      <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[100%]">{`00:00`}</Text>
                      <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[100%]">{`23:59`}</Text>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 font-poppins items-start lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] rounded-radius16 w-[44%]">
                    <Text className="font-bold lg:mx-[14px] xl:mx-[16px] 2xl:mx-[18px] 3xl:mx-[21px] mx-[24px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Performance`}</Text>
                    <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Stack className="3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] mb-[1px] w-[53%]">
                          <Row className="absolute bottom-[5%] inset-x-[0] items-center justify-center mx-[auto] w-[51%]">
                            <Image
                              src="img_arrow_2.svg"
                              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] my-[15px] lg:my-[8px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                              alt="arrow"
                            />
                            <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-bluegray_900 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left">{`+15%`}</Text>
                          </Row>
                          <Stack className="absolute 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] inset-[0] w-[100%]">
                            <Image
                              src="img_ellipse35.svg"
                              className="absolute 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] inset-[0] object-cover opacity-op5 w-[100%]"
                              alt="Ellipse35"
                            />
                            <Image
                              src="img_ellipse36.svg"
                              className="absolute 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] left-[0] object-contain w-[63%]"
                              alt="Ellipse36"
                            />
                          </Stack>
                        </Stack>
                        <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[32%]">{`Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Row>
              </Column>
              <Stack className="lg:h-[243px] xl:h-[277px] 2xl:h-[312px] 3xl:h-[374px] h-[415px] w-[29%]">
                <Row className="absolute bg-white_A700 items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] top-[0] w-[100%]">
                  <Image
                    src="img_icon_15.svg"
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[17px] xl:my-[20px] 2xl:my-[22px] 3xl:my-[27px] my-[30.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    alt="icon"
                  />
                  <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[35%]">
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Total Order Complete`}</Text>
                    <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`2.678`}</Text>
                  </Column>
                </Row>
                <Row className="absolute bg-white_A700 items-center justify-start top-[25%] w-[100%]">
                  <Image
                    src="img_icon_16.svg"
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[17px] xl:my-[20px] 2xl:my-[22px] 3xl:my-[27px] my-[30.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    alt="icon"
                  />
                  <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[34%]">
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Total Order Delivered`}</Text>
                    <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`1.234`}</Text>
                  </Column>
                </Row>
                <Row className="absolute bg-white_A700 bottom-[25%] items-center justify-start w-[100%]">
                  <Image
                    src="img_icon_17.svg"
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[17px] xl:my-[20px] 2xl:my-[22px] 3xl:my-[27px] my-[30.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    alt="icon"
                  />
                  <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[34%]">
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Total Order Canceled`}</Text>
                    <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`123`}</Text>
                  </Column>
                </Row>
                <Row className="absolute bg-white_A700 bottom-[0] items-center justify-start rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                  <Image
                    src="img_icon_18.svg"
                    className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[17px] xl:my-[20px] 2xl:my-[22px] 3xl:my-[27px] my-[30.5px] object-contain lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                    alt="icon"
                  />
                  <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[28%]">
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Order Pending`}</Text>
                    <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`432`}</Text>
                  </Column>
                </Row>
              </Stack>
            </Row>
            <Row className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] w-[100%]">
              <Column className="bg-white_A700 items-center rounded-radius20 w-[69%]">
                <Row className="items-start justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Text className="font-bold 3xl:mb-[11px] mb-[13px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Order Rate`}</Text>
                  <div className="2xl:mr-[24px] 3xl:mr-[28px] bg-transparent lg:mr-[18px] mr-[32px] w-[11%] xl:mr-[21px] input-wrap">
                    <Image
                      src="img_vector_12.svg"
                      className="absolute right-[23.560059px] bg-transparent lg:right-[13px] xl:right-[15px] 2xl:right-[17px] 3xl:right-[21px] my-[auto] inset-y-[0]"
                      alt="Vector"
                    />
                    <SelectBox
                      className="bg-transparent border border-gray_500 border-solid font-normal not-italic xl:pl-[11px] 2xl:pl-[12px] 3xl:pl-[14px] pl-[16.5px] lg:pl-[9px] lg:pr-[39px] xl:pr-[44px] 2xl:pr-[50px] 3xl:pr-[60px] pr-[67.000059px] py-[10.705px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius8 text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[100%]"
                      placeholderClassName=""
                      name="Group152"
                      placeholder={`Select`}
                      isSearchable={true}
                      isMulti={false}
                    ></SelectBox>
                  </div>
                </Row>
                <Row className="items-start justify-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] mx-[auto] w-[94%]">
                  <Row className="items-center justify-between w-[14%]">
                    <Image
                      src="img_user.svg"
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="User"
                    />
                    <Column className="items-start xl:py-[2px] lg:py-[2px] 3xl:py-[3px] 2xl:py-[3px] py-[4px] rounded-radius5 w-[70%]">
                      <Text className="font-normal lg:mx-[4px] xl:mx-[5px] 2xl:mx-[6px] 3xl:mx-[7px] mx-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Order Total`}</Text>
                      <Text className="font-semibold lg:mx-[5px] 2xl:mx-[6px] xl:mx-[6px] 3xl:mx-[8px] mx-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`25.307`}</Text>
                    </Column>
                  </Row>
                  <Column className="3xl:mb-[11px] mb-[13px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] ml-[26px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] w-[13%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text className="font-normal lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Target`}</Text>
                      <Text className="font-bold text-bluegray_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18">{`3.982`}</Text>
                    </Row>
                    <div
                      className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] h-[8px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] overflow-hidden relative w-[100%]"
                      name="Group161"
                    >
                      <div className="w-full h-full absolute bg-gray_500"></div>
                      <div
                        className="h-full absolute bg-amber_600"
                        style={{ width: "69%" }}
                      ></div>
                    </div>
                  </Column>
                  <Column className="justify-start lg:ml-[253px] xl:ml-[290px] 2xl:ml-[326px] 3xl:ml-[391px] ml-[435px] w-[12%]">
                    <Text className="font-normal leading-lh not-italic lg:pl-[16px] xl:pl-[18px] 2xl:pl-[21px] 3xl:pl-[25px] pl-[28px] xl:py-[2px] lg:py-[2px] 3xl:py-[3px] 2xl:py-[3px] py-[4px] rounded-radius5 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[100%]">{`This Month`}</Text>
                    <Text className="font-semibold lg:mx-[16px] xl:mx-[18px] 2xl:mx-[21px] 3xl:mx-[25px] mx-[28px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`1324`}</Text>
                  </Column>
                  <Column className="justify-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[12%]">
                    <Text className="font-normal leading-lh not-italic lg:pl-[16px] xl:pl-[18px] 2xl:pl-[21px] 3xl:pl-[25px] pl-[28px] xl:py-[2px] lg:py-[2px] 3xl:py-[3px] 2xl:py-[3px] py-[4px] rounded-radius5 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[100%]">{`Last Month`}</Text>
                    <Text className="font-semibold lg:mx-[16px] xl:mx-[18px] 2xl:mx-[21px] 3xl:mx-[25px] mx-[28px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`1324`}</Text>
                  </Column>
                </Row>
                <Column className="items-center justify-start lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40.17px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]">
                  <Row className="items-end justify-start w-[100%]">
                    <Column className="items-start justify-start lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] w-[3%]">
                      <Text className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`100`}</Text>
                      <Text className="font-normal xl:mr-[4px] lg:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] mr-[7px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`75`}</Text>
                      <Text className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`50`}</Text>
                      <Text className="font-normal xl:mr-[4px] lg:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] mr-[7px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`25`}</Text>
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`0`}</Text>
                    </Column>
                    <Stack className="lg:h-[171px] xl:h-[196px] 2xl:h-[220px] 3xl:h-[264px] h-[293px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] w-[87%]">
                      <Stack className="absolute lg:h-[171px] xl:h-[196px] 2xl:h-[220px] 3xl:h-[264px] h-[293px] inset-[0] w-[100%]">
                        <div className="absolute bottom-[0] lg:h-[165px] xl:h-[189px] 2xl:h-[212px] 3xl:h-[254px] h-[282px] inset-x-[0] top-[4%] w-[100%]">
                          <VictoryChart theme={VictoryTheme.material}>
                            <VictoryStack colorScale={"blue"}>
                              <VictoryArea
                                data={VictoryAreaData[0]}
                                style={{ data: { stroke: "#ff8080" } }}
                                interpolation="natural"
                              />

                              <VictoryArea
                                data={VictoryAreaData[1]}
                                style={{ data: { stroke: "#80e5ff" } }}
                                interpolation="natural"
                              />
                            </VictoryStack>
                          </VictoryChart>
                        </div>
                        <Image
                          src="img_union.svg"
                          className="absolute lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] h-[83px] object-contain right-[40%] top-[0] w-[10%]"
                          alt="Union"
                        />
                      </Stack>
                      <Column className="absolute items-center justify-start right-[43%] top-[3%] w-[5%]">
                        <Text className="font-normal 2xl:ml-[6px] ml-[8.03px] 2xl:mr-[5px] mr-[7.97px] lg:mx-[4px] xl:mx-[5px] 3xl:mx-[7px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left text-white_A700">{`July`}</Text>
                        <Text className="font-semibold lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`1.702`}</Text>
                      </Column>
                    </Stack>
                  </Row>
                  <Row className="items-start justify-between lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[25px] mt-[27.83px] mx-[auto] w-[90%]">
                    <Text className="font-normal mb-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Jan`}</Text>
                    <Text className="font-normal mb-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Feb`}</Text>
                    <Text className="font-normal mb-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Mar`}</Text>
                    <Text className="font-normal mb-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Apr`}</Text>
                    <Text className="font-normal mb-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`May`}</Text>
                    <Text className="font-normal mb-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Jun`}</Text>
                    <Text className="font-normal mb-[1px] not-italic text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Jul`}</Text>
                    <Text className="font-normal mb-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Aug`}</Text>
                    <Text className="font-normal mb-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Sep`}</Text>
                    <Text className="font-normal mb-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Oct`}</Text>
                    <Text className="font-normal mb-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Nov`}</Text>
                    <Text className="font-normal mb-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Dec`}</Text>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start rounded-radius16 w-[29%]">
                <Row className="items-start justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Text className="font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Popular Food`}</Text>
                  <Image
                    src="img_dots_9.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] mr-[33px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    alt="Dots"
                  />
                </Row>
                <Column className="items-start lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] w-[100%]">
                  <Text className="font-normal lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Legend`}</Text>
                </Column>
                <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[86%]">
                  <CheckBox
                    className="font-normal lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] not-italic text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[43%]"
                    inputClassName="2xl:h-[16px] 2xl:w-[15px] 3xl:h-[19px] 3xl:w-[18px] bg-amber_600 h-[21px] lg:h-[13px] lg:w-[12px] rounded-radius4 w-[21px] xl:h-[15px] xl:w-[14px] mr-[5px]"
                    name="Group157"
                    label={`Asian Food (27%)`}
                  ></CheckBox>
                  <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-right">{`763`}</Text>
                </Row>
                <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[86%]">
                  <CheckBox
                    className="font-normal lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] not-italic text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[41%]"
                    inputClassName="2xl:h-[16px] 2xl:w-[15px] 3xl:h-[19px] 3xl:w-[18px] bg-red_400 h-[21px] lg:h-[13px] lg:w-[12px] rounded-radius4 w-[21px] xl:h-[15px] xl:w-[14px] mr-[5px]"
                    name="Group158"
                    label={`Fast Food (50%)`}
                  ></CheckBox>
                  <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-right">{`321`}</Text>
                </Row>
                <Row className="items-center justify-between lg:mb-[26px] xl:mb-[30px] 2xl:mb-[33px] 3xl:mb-[40px] mb-[45px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[86%]">
                  <CheckBox
                    className="font-normal lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] not-italic text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[48%]"
                    inputClassName="2xl:h-[16px] 2xl:w-[15px] 3xl:h-[19px] 3xl:w-[18px] bg-light_green_500 h-[21px] lg:h-[13px] lg:w-[12px] rounded-radius4 w-[21px] xl:h-[15px] xl:w-[14px] mr-[5px]"
                    name="Group159"
                    label={`Western Food (23%)`}
                  ></CheckBox>
                  <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-right">{`69`}</Text>
                </Row>
              </Column>
            </Row>
            <footer className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Column className="bg-white_A700 items-start justify-center rounded-radius16 w-[100%]">
                <Text className="font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Activity`}</Text>
                <Column className="lg:mb-[22px] xl:mb-[26px] 2xl:mb-[29px] 3xl:mb-[35px] mb-[39px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[69%]">
                      <Column className="w-[100%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Column className="items-start w-[3%]">
                            <Text className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`100`}</Text>
                            <Text className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`80`}</Text>
                            <Text className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`60`}</Text>
                            <Text className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] mr-[6px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`40`}</Text>
                            <Text className="font-normal xl:mr-[4px] lg:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] mr-[7px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`20`}</Text>
                            <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`0`}</Text>
                          </Column>
                          <Stack className="lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] h-[256px] mb-[10px] lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[95%]">
                            <Image
                              src="img_lines.svg"
                              className="absolute lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] h-[256px] inset-[0] object-cover w-[100%]"
                              alt="lines"
                            />
                            <div className="absolute bottom-[0] lg:h-[134px] xl:h-[153px] 2xl:h-[172px] 3xl:h-[207px] h-[229px] inset-x-[0] mx-[auto] w-[95%]">
                              <ChartComposed
                                options={{
                                  responsive: true,
                                  maintainAspectRatio: false,

                                  scales: {
                                    x: { display: false },
                                    y: { display: false },
                                  },
                                }}
                                type="bar"
                                data={ChartJsComposedData}
                              />
                            </div>
                          </Stack>
                        </Row>
                      </Column>
                      <Column className="items-end 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                        <Row className="items-center justify-end lg:mx-[16px] xl:mx-[18px] 2xl:mx-[21px] 3xl:mx-[25px] mx-[28px] w-[88%]">
                          <Text className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Jan`}</Text>
                          <Text className="font-normal lg:ml-[26px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] ml-[45px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Feb`}</Text>
                          <Text className="font-normal lg:ml-[26px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] ml-[45px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Mar`}</Text>
                          <Text className="font-normal lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] ml-[47px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Apr`}</Text>
                          <Text className="font-normal lg:ml-[26px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] ml-[45px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`May`}</Text>
                          <Text className="font-normal lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Jun`}</Text>
                          <Text className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Jul`}</Text>
                          <Text className="font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Aug`}</Text>
                          <Text className="font-normal lg:ml-[26px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] ml-[45px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Sep`}</Text>
                          <Text className="font-normal lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Oct`}</Text>
                          <Text className="font-normal lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Nov`}</Text>
                          <Text className="font-normal lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Dec`}</Text>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[40px] w-[21%]">
                      <Column className="items-start justify-start w-[100%]">
                        <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Completed Order`}</Text>
                        <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`932 Task`}</Text>
                        <div className="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px] input-wrap">
                          <Image
                            onClick={() => setInputvalue("")}
                            src={
                              inputvalue?.length ? "close4.svg" : "search.svg"
                            }
                            className="absolute cursor-pointer h-[20px] right-[22px] lg:h-[12px] lg:right-[12px] xl:h-[14px] xl:right-[14px] 2xl:h-[16px] 2xl:right-[16px] 3xl:h-[19px] 3xl:right-[19px] my-[auto] inset-y-[0]"
                            alt="Vector"
                          />
                          <div className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] lg:pr-[525px] xl:pr-[600px] 2xl:pr-[675px] 3xl:pr-[810px] pr-[900.05px] placeholder:text-bluegray_900 w-[100%]">
                            <ResponsiveLine
                              data={NivoLinData}
                              margin={{
                                top: 10,
                                right: 10,
                                bottom: 10,
                                left: 10,
                              }}
                              xScale={{ type: "point" }}
                              yScale={{
                                type: "linear",
                                min: "auto",
                                max: "auto",
                                stacked: true,
                                reverse: false,
                              }}
                              colors={["#bbbb77", "#80e5ff"]}
                              colorBy="id"
                              curve="natural"
                              yFormat=" >-.2f"
                              useMesh={true}
                              legends={[
                                {
                                  dataFrom: "keys",
                                  anchor: "bottom-right",
                                  direction: "column",
                                  justify: false,
                                  translateX: 120,
                                  itemsSpacing: 2,
                                  itemWidth: 100,
                                  itemHeight: 20,
                                },
                              ]}
                            />
                          </div>
                        </div>
                      </Column>
                      <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                        <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Order Delivered`}</Text>
                        <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`932`}</Text>
                        <div className="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px] input-wrap">
                          <Image
                            onClick={() => setInputvalue1("")}
                            src={
                              inputvalue1?.length ? "close4.svg" : "search.svg"
                            }
                            className="absolute cursor-pointer h-[20px] right-[22px] lg:h-[12px] lg:right-[12px] xl:h-[14px] xl:right-[14px] 2xl:h-[16px] 2xl:right-[16px] 3xl:h-[19px] 3xl:right-[19px] my-[auto] inset-y-[0]"
                            alt="Vector"
                          />
                          <div className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] lg:pr-[525px] xl:pr-[600px] 2xl:pr-[675px] 3xl:pr-[810px] pr-[900.05px] placeholder:text-bluegray_900 w-[100%]">
                            <VictoryChart theme={VictoryTheme.material}>
                              <VictoryLine
                                interpolation="natural"
                                data={VictoryLineData[0]}
                                style={{ data: { stroke: "#ffd966" } }}
                              />

                              <VictoryLine
                                interpolation="natural"
                                data={VictoryLineData[1]}
                                style={{ data: { stroke: "#eb5757" } }}
                              />
                            </VictoryChart>
                          </div>
                        </div>
                      </Column>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </footer>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DashboardRestaurantPage;

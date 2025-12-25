
import { test } from '@playwright/test';
import { getTestData } from '../utilsss/readexcel';




test('Add Annual Holiday', async ({ }) => {
  const data = getTestData('Annual Holiday');
    const holiday = AnnualHolidayPage;


      await holiday.openAnnualHolidayPage();
      await holiday.addHoliday(data["Annual holiday"], data.Date);

      if (data.action.includes("edit")) {
        await holiday.editHoliday(data["Annual Holiday"], data.Update_date);
      }
      if (data.action.includes("delete")) {
        await holiday.deleteHoliday(data["Annual Holiday"]);
      }

    
    });
 


    
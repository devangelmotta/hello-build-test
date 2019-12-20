/**
 *
 * Getter Google Calendar
 *
 */

import { API_KEY, GOOGLE_CLIENT_ID, DISCOVERY_DOCS, SCOPES } from "../../../config";

async function withGoogleCalendar() {
    try {
        await gapi.load('client:auth2');
        await gapi.client.init({
            apiKey: API_KEY,
            clientId: GOOGLE_CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        });

        await gapi.auth2.getAuthInstance().isSignedIn.listen();
        await gapi.auth2.getAuthInstance().signIn();
        if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
            let response = await gapi.client.calendar.events.list({
                'calendarId': 'primary',
                'timeMin': (new Date()).toISOString(),
                'showDeleted': false,
                'singleEvents': true,
                'orderBy': 'startTime'
            });

            var events = response.result.items;
            if (events.length > 0) return events
        } else {

            return [];
        }
    } catch (error) {

        throw error;
    }
}

export default withGoogleCalendar;
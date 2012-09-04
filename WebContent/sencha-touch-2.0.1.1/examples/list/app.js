//<debug>
Ext.Loader.setPath({
    'Ext': '../../src'
});
//</debug>

/**
 * This simple example shows the ability of the Ext.List component.
 *
 * In this example, it uses a grouped store to show group headers in the list. It also
 * includes an indicator so you can quickly swipe through each of the groups. On top of that
 * it has a disclosure button so you can disclose more information for a list item.
 */

//define the application
Ext.application({
    //define the startupscreens for tablet and phone, as well as the icon
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    glossOnIcon: false,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@114.png'
    },

    //require any components/classes what we will use in our example
    requires: [
        'Ext.data.Store',
        'Ext.List',
        'Ext.plugin.PullRefresh'
    ],

    /**
     * The launch method is called when the browser is ready, and the application can launch.
     *
     * Inside our launch method we create the list and show in in the viewport. We get the lists configuration
     * using the getListConfiguration method which we defined below.
     *
     * If the user is not on a phone, we wrap the list inside a panel which is centered on the page.
     */
    launch: function() {
        //get the configuration for the list
        var listConfiguration = this.getListConfiguration();

        //if the device is not a phone, we want to create a centered panel and put the list
        //into that
        if (!Ext.os.is.Phone) {
            //use Ext.Viewport.add to add a new component into the viewport
            Ext.Viewport.add({
                //give it an xtype of panel
                xtype: 'panel',

                //give it a fixed witdh and height
                width: 350,
                height: 370,

                //make it centered
                centered: true,

                //make the component modal so there is a mask around the panel
                modal: true,

                //set hideOnMaskTap to false so the panel does not hide when you tap on the mask
                hideOnMaskTap: false,

                //give it a layout of fit so the list stretches to the size of this panel
                layout: 'fit',

                //insert the listConfiguration as an item into this panel
                items: [listConfiguration]
            });
        } else {
            //if we are a phone, simply add the list as an item to the viewport
            Ext.Viewport.add(listConfiguration);
        }
    },

    /**
     * Returns a configuration object to be used when adding the list to the viewport.
     */
    getListConfiguration: function() {
    	return Ext.create('Ext.List', {
    	    fullscreen: true,

    	    store: {
    	        fields: ['name'],
    	        data: [
    	            {name: 'Cowper'},
    	            {name: 'Everett'},
    	            {name: 'University'},
    	            {name: 'Forest'}
    	        ]
    	    },

    	    itemTpl: '{name}',

    	    listeners: {
    	        select: function(view, record) {
    	            Ext.Msg.alert('Selected!', 'You selected ' + record.get('name'));
    	        }
    	    }
    	});

    }
});
